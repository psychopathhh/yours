import React from 'react'
import { snow } from '../assets'

const Logo = () => {
    return (
        <div className='relative '>
            <img className='sm:w-[100%] w-[150px] sm:h-[80px] h-[50px] object-cover' src={snow} alt="snow" />
            <span className='absolute sm:top-[20%] top-[10%] sm:left-[20%] left-[10%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold inline-block bg-clip-text text-transparent text-4xl text-center'>YOURS</span>
        </div>
    )
}

export default Logo