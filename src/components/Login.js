import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignedIn,setisSignedIn] = useState(true)
    const clickHandler = () => {
        setisSignedIn(!isSignedIn) 
    }
  return (
    <div>
        <Header/>
        <div className="relative">
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg' alt='no render'/>
        </div>
        <div className='absolute right-0 left-0 top-[90px] m-auto w-4/12 bg-black py-10 px-20 bg-opacity-80'>
            <header className='pb-3 '>
                <h1 className='text-white text-[40px]'>
                    {!isSignedIn ? "Sign Up" : "Sign In"}</h1>
            </header>
            <form >
                {!isSignedIn && <input  type='text' placeholder='Name' className='px-2 py-4  mb-3 border border-gray-500  w-full rounded-md bg-black'/> 

                }
                <input  type='text' placeholder='Email or mobile number' className='px-2 py-4  mb-3 border border-gray-500  w-full rounded-md bg-black'/> 
                <input type='password' placeholder='password' className='px-2 py-4 w-full border border-gray-500 rounded-md bg-black'/>
                <button className='px-2 py-2 mt-3 border border-gray-500 rounded-[20px] bg-red-700 text-white w-full'>{!isSignedIn ? "Sign Up" : "Sign In"}</button>
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