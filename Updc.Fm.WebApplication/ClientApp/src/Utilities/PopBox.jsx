import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import Buton from './Buton'

const PopBox = () => {
  return (
    <div className=' flex flex-col  justify-around w-[350px] h-[300px] py-4 border border-red-700 rounded-lg'>
        <div className='h-[20%] flex justify-center py-3'><FaCheckCircle size={48} color={'#A73439'} /></div>
        <div className='h-[20%] flex justify-center py-3 font-semibold text-xl'>Staff Created</div>
        <div className='h-[20%] flex justify-center py-3'> <div className=' flex justify-end gap-4'> <Buton className=' rounded-md h-8 w-24 px-4 py-1 bg-white text-black hover:bg-red-600 hover:text-white border border-red-600 ' text='Ok'/> <span className=''><Buton className='h-8 w-24 px-3 py-1 bg-green-500 text-white hover:bg-white hover:text-green-500 rounded-md text-sm' text='Create New'/></span></div></div>

    </div>
  )
}

export default PopBox