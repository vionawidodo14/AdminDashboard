import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import RightSide from '../components/RightSide/RightSide'
import Cards from '../components/Cards/Cards'
import Table from '../components/Table/Table'
import MenuTable from '../components/Menu/MenuTable'

function Menu() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className='MainDash'>
          <h1>Menu</h1>
          <MenuTable />
        </div>
        {/* <RightSide /> */}
        <div></div>
      </div>
    </div>
  )
}

export default Menu
