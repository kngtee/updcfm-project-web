import React from 'react'
import DropDownButton from '../Utilities/DropDownButton'
import Buton from '../Utilities/Buton'
const SalesNewUnit = () => {
  return (
    <div className=' flex justify-around border border-red-700 rounded-lg w-[600px] p-1 h-[400px]'>
        <div className=' w-[45%] '>
          <div className=' flex justify-between mt-[1.5rem]  '><span className=' ' >First Name: </span><input className='w-[180px] shadow-lg h-[40px] rounded-md px-4 ' type='text' placeholder='Enter first name'/></div>
          <div  className=' flex justify-between mt-[1.5rem]'> <span className=''>Email: </span><input className='w-[180px] shadow-lg h-[40px] rounded-md px-4 boxShadow:2px 5px 10px grey' type='text' placeholder='Enter email address'/></div>
          <div  className='mt-[1.5rem] flex justify-between'> <span>Cluster: </span><DropDownButton className='' first="Cluster" second='Estate' third='Unit'/></div>
          <div  className='mt-[1.5rem] flex justify-between'> <span>Unit: </span><DropDownButton className='' first="Unit" second='Jobs' third='Unit'/></div>
        </div>
        <div className='w-[45%] '>
        <div className=' flex justify-between mt-[1.5rem]  '><span>Last Name: </span><input className='w-[180px] shadow-lg h-[40px] rounded-md px-4 ' type='text' placeholder='Enter Last name'/></div>
          <div  className=' flex justify-between mt-[1.5rem]'> <span>Phone no: </span><input className='w-[180px] shadow-lg h-[40px] rounded-md px-4 boxShadow:2px 5px 10px grey' type='text' placeholder='Enter Phone number'/></div>
          <div  className='mt-[1.5rem] flex justify-between'> <span>Estate: </span><DropDownButton className='' first="Select Estate" second='Estate' third='Unit'/></div>
            <div className=' flex justify-end gap-4 mt-[6rem]'> <Buton className='px-3 py-1 bg-white rounded-md hover:bg-red-600 hover:text-white text-black border border-red-600 ' text='Cancel'/> <span className=''><Buton className=' px-3 py-1 bg-green-500 text-white shadow-green-500/50 rounded-md hover:bg-white hover:text-green-500' text='Allocate'/></span></div>
          
        </div>
    </div>
  )
}

export default SalesNewUnit