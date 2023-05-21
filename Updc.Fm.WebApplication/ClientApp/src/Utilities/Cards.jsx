import React from 'react'

const Cards = (props) => {
  return (
    <div className={props.className} style={{display:'flex',justifyContent:"space-between", height:'200px',width:'850px',marginTop:'1rem',marginLeft:'1rem',padding:'20px'}}>
        <div style={{ display:'Flex',justifyContent:'space-between',padding:'30px', alignItems:'center', height:'150px',width:'250px',boxShadow:'2px 5px 10px grey',borderRadius:'20px'}}>
        <div >
        <h6 className=' text-gray-400'>{props.textname}</h6>
        <h1 className=' font-bold text-3xl'>{props.num}</h1>
       </div><img className='h-[50px] w-[50px]' src={props.icon} alt=''/></div>
 </div>

  )
}

export default Cards