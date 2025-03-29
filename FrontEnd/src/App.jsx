import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import CaptanLogin from './pages/CaptanLogin'
import UserLogin from './pages/UserLogin'
import CaptanSignin from './pages/CaptanSignin'
import UserSignin from './pages/UserSignin'

const App = () => {
  return (
    <div className='container mx-auto bg-red-200'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/captanlogin" element={<CaptanLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/captansignin" element={<CaptanSignin />} /> 
        <Route path="/usersignin" element={<UserSignin />} />
      </Routes>
    </div>
  )
}

export default App
