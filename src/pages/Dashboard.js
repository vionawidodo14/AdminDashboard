import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MainDash from '../components/MainDash/MainDash'
import RightSide from '../components/RightSide/RightSide'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import MainContainer from '../components/MainContainer'

function Dashboard() {

  return (
    <MainContainer>
      <Sidebar />
      <MainDash />
      {/* <RightSide /> */}
    </MainContainer>
  )
}

export default Dashboard
