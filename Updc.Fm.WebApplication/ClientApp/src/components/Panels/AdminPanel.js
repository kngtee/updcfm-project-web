import React from 'react'
import './AdminPanel.scss'

function AdminPanel() {
  
  return (
    <div className='AdminPanel'>
      <div className='panelContent'>
        <div className='adminContent'>
          <p>Admin</p>

          <button>Dashboard</button>
        </div>

        <div className='manageContent'>
          <p>Manage</p>

          <ul>
            <li>Staff</li>
            <li>Cluster</li>
            <li>Estate</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
