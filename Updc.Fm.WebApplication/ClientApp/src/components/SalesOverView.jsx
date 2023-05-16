import React from 'react'
import { NavMenu } from './NavMenu'
import Sidebar from '../Utilities/Sidebar'
import Feed from './Feed'


const SalesOverView = () => {
  return (
    <div  style={{ width:" 100vw",height: "100vh",padding:'0px 70px 0px 70px'
        }} >
        <div  className=""><NavMenu/></div>
        <div style={{display:'flex', justifyContent:'center',marginTop:'0.5rem'}}>
            <div >
            <hr  style={{width:'50rem',}}/>
            </div>
        </div>
           <div >
           {/* <Sidebar/> */}
            <div style={{width:'85%',borderRadius:'20px'}} class=" "><Feed/></div> 
           </div>
    </div>
  )
}

export default SalesOverView