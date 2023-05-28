import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Table from '../components/Table/Table'
import MainContainer from '../components/MainContainer'

function Order() {
  return (
    <MainContainer>
      <Sidebar />
      <div className='MainDash'>
        <h1>Order</h1>
        <Table />
      </div>
      {/* <RightSide /> */}
      <div></div>
    </MainContainer>
  )
}

export default Order
