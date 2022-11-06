import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const BackBtn = ({ url }) => {
    const navigate = useNavigate()
    return (
        <><FiArrowLeft onClick={() => {
            url ?
                navigate(url)
                : window.history.back()
        }} className='w-10 h-10 text-white hover:text-gray-400 m-[10px] cursor-pointer' /></>
    )
}

export default BackBtn