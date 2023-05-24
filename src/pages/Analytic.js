import React from 'react'
import { Card } from '@mui/material'
import Cards from '../components/Cards/Cards'
import Sidebar from '../components/Sidebar/Sidebar'

const Analytics = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className='MainDash'>
          <h1>Analytics</h1>
          <Cards />
        </div>
        {/* <RightSide /> */}
        <div></div>
      </div>
    </div>
  )
}

export default Analytics