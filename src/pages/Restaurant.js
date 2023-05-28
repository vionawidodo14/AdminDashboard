import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import RightSide from '../components/RightSide/RightSide'
import Cards from '../components/Cards/Cards'
import Table from '../components/Table/Table'
import RestaurantTable from '../components/Restaurant/RestaurantTable'
import MainContainer from '../components/MainContainer'

function Restaurant() {
  return (
    <MainContainer>
      <Sidebar />
      <div className='MainDash'>
        <h1>Restaurant</h1>
        <RestaurantTable />
      </div>
      {/* <RightSide /> */}
      <div></div>
    </MainContainer>
  )
}

export default Restaurant
