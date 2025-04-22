import React from 'react'
import { Link } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import { useContext } from 'react'

const Home = () => {
  const userContext= useContext(userDataContext)
  console.log("Your at home ")
  console.log(userContext.userData)
  return (
    <div>Home</div>
  )
}

export default Home



