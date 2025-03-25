import React from 'react'
import {Routes , Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignin from './pages/UserSignin'
import CaptanLogin from './pages/CaptanLogin'
import CaptanSignin from './pages/CaptanSignin'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/UserLogin' element={<UserLogin/>} />
          <Route path='/UserSignin' element={<UserSignin/>} />
          <Route path='/CaptanLogin' element={<CaptanLogin/>} />
          <Route path='/CaptanSignin' element={<CaptanSignin/>} />
      </Routes>
    </div>
  )
}

export default App
