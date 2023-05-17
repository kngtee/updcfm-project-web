import React from 'react'
import Cards from '../Utilities/Cards'
import DropDownButton from '../Utilities/DropDownButton'
import {FaFilter} from 'react-icons/fa'

const Feed = () => {
  return (
    <div style={{marginLeft:'10rem',width:'80vw'}}>
        <div style={{display:'flex', marginLeft:'2rem',marginTop:'8rem'}} className='w-[600px] ' >
            <DropDownButton/><span><DropDownButton/></span> <span style={{backgroundColor:'#A73439',}}><FaFilter style={{justifyContent:'centre',marginTop:'10px', padding:'2px'}} size={30} color='white'/></span>
        </div>
        <div>
        <Cards/>
        </div>
    </div>
  )
}

export default Feed