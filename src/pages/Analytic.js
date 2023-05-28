import React from 'react'
import { Card } from '@mui/material'
import Cards from '../components/Cards/Cards'
import Sidebar from '../components/Sidebar/Sidebar'
import MainContainer from '../components/MainContainer'

const Analytics = () => {
  return (
    <MainContainer>

      <Sidebar />
      <div className='MainDash'>
        <h1>Analytics</h1>
        <Cards />
      </div>
      {/* <RightSide /> */}
      <div></div>
    </MainContainer>
  )
}

export default Analytics