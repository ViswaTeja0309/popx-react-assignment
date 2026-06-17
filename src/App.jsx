import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

const App = () => {

  return (

    <>
    
    <BrowserRouter>
    
      <Routes>
         
         <Route path ='/' element = { <Landing/> } />
         <Route path ='/Login' element = { <Login/> } />
         <Route path = '/Signup' element = { <Signup/> } />
         <Route path = '/Profile' element = { <Profile/> } />

      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App