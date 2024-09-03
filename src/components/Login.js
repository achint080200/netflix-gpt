import React, {  useRef, useState } from 'react'
import Header from './Header'
import {validateEmailAndPassword} from '../utils/validate'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser, } from '../utils/userSlice';
import { AVATAR } from '../utils/constants';
import {BG_URL} from '../utils/constants'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignedIn,setisSignedIn] = useState(true);
    const [errorMessage,seterrorMessage] = useState(null);
    const setName = useRef(null);
    const emailIdCheck = useRef(null);
    const passwordCheck = useRef(null)
    const submitHandler = () => {
        
        const message = validateEmailAndPassword(emailIdCheck.current.value,passwordCheck.current.value);
        seterrorMessage(message);
        if(message) return;
        if(!isSignedIn){
            createUserWithEmailAndPassword(
                auth, 
                emailIdCheck.current.value, 
                passwordCheck.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: setName.current.value, photoURL: AVATAR
                  }).then(() => {
                    // Profile updated!
                    // ...
                    const {uid, email, displayName ,photoURL} = auth.currentUser;
                    dispatch(adduser({uid : uid , email : email, displayName : displayName , photoURL : photoURL}));
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + " "+errorMessage)
                
                // ..
            });
        }else{
            signInWithEmailAndPassword(auth, 
                emailIdCheck.current.value, 
                passwordCheck.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                   
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + " "+errorMessage)
                    
                });
        }  
    }
    const clickHandler = () => {
        setisSignedIn(!isSignedIn) 
    }
  return (
    <div>
        <Header/>
        <div className="relative w-full max-h-screen ">
            <img className="h-screen sm:h-auto  "src={BG_URL} alt='no render'/>
        </div>
        <div className='absolute right-0 left-0 top-[90px] sm:m-auto mx-8  sm:w-4/12 bg-black py-10 px-20 bg-opacity-70'>
            <header className='pb-3 '>
                <h1 className='text-white text-[40px]'>
                    {!isSignedIn ? "Sign Up" : "Sign In"}</h1>
            </header>
            <form onSubmit={(e)=> e.preventDefault()}>
                {!isSignedIn && <input ref={setName}  type='text' placeholder='Name' className='text-white px-2 py-4  mb-3 border border-gray-500  w-full rounded-md bg-black' /> 

                }
                <input ref={emailIdCheck}
                 type='text' placeholder='Email or mobile number' className='text-white px-2 py-4  mb-3 border border-gray-500  w-full rounded-md bg-black'/> 
                <input ref={passwordCheck}
                type='password' placeholder='password' className='text-white px-2 py-4 w-full border border-gray-500 rounded-md bg-black'/>
                <p className='text-red-600 my-3 text-xl'>{errorMessage}</p>
                <button 
                onClick={submitHandler}
                className='px-2 py-2 mt-3 border border-gray-500 rounded-[20px] bg-red-700 text-white w-full'>{!isSignedIn ? "Sign Up" : "Sign In"}</button>
                <p className='text-white text-center my-3'>OR</p>
                <button className='px-2 py-2 mt-3 border border-gray-500 rounded-[20px]  text-white w-full bg-opacity-0'>Use a sign-in code</button>
                <a className='text-white text-center my-3'>Forgot password?</a>
                <p className='text-white my-3 cursor-pointer' onClick={clickHandler}>{!isSignedIn ? "Already a user?Sign In now." : "New to Netflix? Sign up now."}</p>
            </form>
        </div>
    </div>
  )
}

export default Login