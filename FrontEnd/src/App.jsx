import React from 'react'
import {Routers , Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignin from './pages/UserSignin'
import CaptanLogin from './pages/CaptanLogin'
import CaptanSignin from './pages/CaptanSignin'

const App = () => {
  return (
    <div>
      <Routers>
          <Route path='/' element={<home/>} />
          <Route path='/UserLogin' element={<UserLogin/>} />
          <Route path='./UserSignin' element={<UserSignin/>} />
          <Route path='./CaptanLogin' element={<CaptanLogin/>} />
          <Route path='./CaptanSignin' element={<CaptanSignin/>} />
      </Routers>
    </div>
  )
}

export default App
