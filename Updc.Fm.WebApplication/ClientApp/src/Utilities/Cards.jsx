import React from 'react'
import { FaForumbee} from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { FaBehanceSquare } from 'react-icons/fa'

const Cards = () => {
  return (
    <div style={{display:'flex',justifyContent:"space-between", height:'200px',width:'850px',marginTop:'1rem',marginLeft:'1rem',padding:'20px'}}>
        <div style={{ display:'Flex',justifyContent:'space-between',padding:'30px', alignItems:'center', height:'150px',width:'250px',boxShadow:'2px 5px 10px grey',borderRadius:'20px'}}>
        <div >
        <h5 style={{fontSize:'20px'}}>Total Unit</h5>
        <h3 style={{fontSize:'30px'}}>100</h3>
       </div>
       <FaBuilding name='' size={60} color='red' opacity='40%' />
        </div>
        <div style={{ display:'Flex',justifyContent:'space-between',padding:'30px', alignItems:'center', height:'150px',width:'250px',boxShadow:'2px 5px 10px grey',borderRadius:'20px'}}>
        <div >
        <h5 style={{fontSize:'20px'}}>Total Unit</h5>
         <h3 style={{fontSize:'30px'}}>70</h3>
        </div>
        <FaForumbee name='' size={60} color='red' opacity='40%' />
        
        </div>
        <div style={{ display:'Flex',justifyContent:'space-between',padding:'30px', alignItems:'center', height:'150px',width:'250px',boxShadow:'2px 5px 10px grey',borderRadius:'20px'}}>
        <div >
        <h5 style={{fontSize:'20px'}}>Total Unit</h5>
         <h3 style={{fontSize:'30px'}}>100</h3>
        </div>
        <FaBehanceSquare name='' size={60} color='red' opacity='40%' />
        
        </div>
 </div>

  )
}

export default Cards