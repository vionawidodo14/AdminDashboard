import React from 'react'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function MainContainer({ children }) {
  const history = useHistory()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push('/login')
        console.log("user is logged out")
      }
    });

  }, [])
  return (
    <div className="App">
      <div className="AppGlass">
        {children}
      </div>
    </div>
  )
}

export default MainContainer
