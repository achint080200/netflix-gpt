import React, { useRef } from 'react'
import {lang} from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAi'


const GptSearchBar = () => {
    const searchText = useRef()
    
    const serachTextHandler = () => {
        console.log(searchText.current.value);
        async function main() {
            const chatCompletion = await openai.chat.completions.create({
              messages: [{ role: 'user', content: searchText.current.value }],
              model: 'gpt-3.5-turbo',
            });
            const json = await chatCompletion.json()
            console.log(json);
            
          }
          

    }
    
    const lan = useSelector(state => state.config.language)
    
  return (
    <div>
        <div className='relative z-10 flex justify-center'>
            <input ref={searchText} className='border border-gray-400 rounded-xl py-2 px-4 w-[500px] text-black bg-white '
            type="text" placeholder={lang[lan]?.gptSearchPlaceHolder}/>
            <button onClick={serachTextHandler}className='border border-gray-400 py-2 px-4 ml-3 rounded-xl text-white bg-red-500'>{lang[lan]?.search}</button>

        </div>
        
    </div>
  )
}

export default GptSearchBar