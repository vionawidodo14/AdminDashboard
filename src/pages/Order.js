import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Table from '../components/Table/Table'

function Order() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className='MainDash'>
          <h1>Order</h1>
          <Table />
        </div>
        {/* <RightSide /> */}
        <div></div>
      </div>
    </div>
  )
}

export default Order
