import React from 'react'
import './SideBar.scss'
import AdminPanel from './Panels/AdminPanel'

function SideBar() {
  return (
    <div className='sideBarBorder'>
    <div className='Sidebar'>
        <AdminPanel/>
    </div>
    </div>
  )
}

export default SideBar
