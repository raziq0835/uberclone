import React, { useContext } from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import CaptanLogin from './pages/CaptanLogin'
import UserLogin from './pages/UserLogin'
import CaptanSignin from './pages/CaptanSignin'
import UserSignin from './pages/UserSignin'
// import { userDataContext } from './context/UserContext'
import UserContext from './context/UserContext'

const App = () => {
  const user = useContext(UserContext)
  console.log(user.name)
  console.log(user.email)
  return (
    
    
    <div>
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
