import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtected = ({children}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    console.log(token)
    if(!token) {
        alert("You are not logged in")
        navigate("/login")
        return ;
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtected
