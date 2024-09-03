import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute sm:absolute top-[400px] sm:top-[200px] pl-4 -left-2 sm:mx-[30px] h-[280px] sm:w-[500px] bg-gradient-to-r '>
        <h1 className='py-3 text-3xl sm:text-6xl text-white'>{title}</h1>
        <h1 className=' py-3 hidden text-white sm:visible'>{overview}</h1>
        <div className='py-3 flex flex-col  sm:flex-row'>
            <button className='bg-white border mr-3 mb-3 px-5 py-1 rounded-md font-bold w-[100px] sm:w-[130px] hover:bg-opacity-80 '>▶️ Play</button>
            <button className='border bg-gray-500 hidden sm:visible sm:px-5 py-1 rounded-md font-bold text-white hover:bg-opacity-80'>More Info</button>

        </div>
    </div>
  )
}

export default VideoTitle