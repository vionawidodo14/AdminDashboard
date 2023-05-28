import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import RightSide from '../components/RightSide/RightSide'
import Cards from '../components/Cards/Cards'
import Table from '../components/Table/Table'
import MenuTable from '../components/Menu/MenuTable'
import MainContainer from '../components/MainContainer'

function Menu() {
  return (
    <MainContainer>

      <Sidebar />
      <div className='MainDash'>
        <h1>Menu</h1>
        <MenuTable />
      </div>
      {/* <RightSide /> */}
      <div></div>
    </MainContainer>
  )
}

export default Menu
