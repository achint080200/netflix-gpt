import React from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useEffect } from 'react';
import { adduser, removeuser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import { useSelector } from 'react-redux';
import {  signOut } from "firebase/auth";
import {toggleGptSearchView} from '../utils/gptSlice';
import {SUPPORTED_LANGUAGES} from '../utils/constants'
import {changeLanguage} from '../utils/config'


const Header = () => {
    const showGptSearch =  useSelector(state => state.gpt.ToggleView )
    const setPhoto = useSelector(state => state.user)
    const user = useSelector(state => state.user)
    const gptSearch = useSelector(state => state.gpt.ToggleView)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const languageHandler = (e)=>{
            dispatch(changeLanguage(e.target.value))
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName ,photoURL} = user;       
              dispatch(adduser({uid : uid , email : email, displayName : displayName , photoURL : photoURL}));
              navigate("/browse")
            } else {
              dispatch(removeuser())
              navigate("/")
            }
          });
          return ()=>unsubscribe()
    },[])
    const signOutHandler = () => {
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            console.error("Sign Out Error:", error);
          });
    }
    const ToggleHandler = () => {
        dispatch(toggleGptSearchView())

    }
    return (
        <div className="absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10 flex flex-col justify-between  sm:flex-row">
            <img className='h-[80px] ml-[110px] sm:items-start mr-[100px]' src={LOGO} alt='Logo' />
            {
                user && 
                    <div className="flex flex-col flex-start items-start space-x-3  sm:flex-row sm:items-center mb-0 ">
                        { gptSearch && 
                            <select onChange={languageHandler}className='py-2 px-4 bg-black text-white '>
                            {SUPPORTED_LANGUAGES.map((item)=>(
                            <option key={item.identifier} value={item.identifier}>{item.name}</option>))}
                            </select>

                        }
                        
                        <button 
                            onClick={ToggleHandler} 
                            className='  z-20 my-6 px-4 py-2 text-white bg-purple-400 rounded-xl
                            '>
                                {gptSearch ? "Home" : "GPT Search"}
                            
                        </button>
                        <img 
                            className=' w-[40px] h-[40px]' 
                            src={setPhoto?.photoURL} 
                            alt='no img' 
                        />
                        <button 
                            className='mt-4 font-bold text-xl text-white p-6 mx-4 cursor-pointer m-1 px-0 pr-10 py-0 '
                            onClick={signOutHandler}>
                            (Sign Out)
                        </button> 
                    </div>

                

            }
            
        </div>
    
    )
}

export default Header