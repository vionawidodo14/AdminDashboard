import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MainDash from '../components/MainDash/MainDash'
import RightSide from '../components/RightSide/RightSide'

function Dashboard() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
