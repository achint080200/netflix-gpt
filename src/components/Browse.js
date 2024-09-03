import React from 'react'
import Header from './Header'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useAddNowPlayingMovies from '../hooks/useAddNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

import GptSearch from './GptSearch';


const Browse = () => {
    const dispatch = useDispatch()
    useAddNowPlayingMovies();

    const navigate = useNavigate()
    
    const showGptSearch =  useSelector(state => state.gpt.ToggleView )

    
  return (
    <div>
        <div className='absolute flex justify-between w-full'>
            <div className=''> 
                <Header/>
            </div>   
                   
        </div>
        

        <div>
        {
            showGptSearch ?  <GptSearch/> :
            <>
             <MainContainer/>
             <SecondaryContainer/>
            </>

        }
        </div>
       
       

    </div>
        
    )
}

export default Browse