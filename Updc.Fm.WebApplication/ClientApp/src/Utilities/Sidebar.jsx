import React from 'react'

const Sidebar = () => {
  return (
    <div style={{display:'block',color:'white',padding:'50px', width:'233px',height:'80%',backgroundColor:'#A73439',borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}} >
        <div style={{width:'100%',height:'50vh',}} >
                <h1 style={{borderBottom:'1px solid white'}}>Sales</h1>
                <button style={{width:'185px',height:'40px',marginTop:'2rem', borderRadius:"10px 0px 0px 10px", backgroundColor:'white',color:'#e01a76'}}>Dash Board</button>
        </div>
        <div style={{width:'100%',height:'50vh'}} ><h1 style={{borderBottom:'1px solid white'}}>Manage</h1>
        </div>

    </div>
  )
}

export default Sidebar