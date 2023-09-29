import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homes from '../pages/Homes/Homes'
import Auth from '../pages/Auth/Auth'
import Questions from '../pages/Questions/Questions'
import AskQuestion from '../pages/AskQuestion/AskQuestion'
import DisplayQuestion from '../pages/Questions/DisplayQuestion'
import Tags from '../pages/Tags/Tags'
import Users from '../pages/Users/Users'
import UserProfile from '../pages/UserProfile/UserProfile'
const AllRoutes = () => {
  return (
    <Routes>
        <Route  path="/Auth" element={<Auth/>}></Route>
        <Route  path="/" element={<Homes/>}></Route>
        <Route  path="/Questions" element={<Questions/>}></Route>
        <Route  path="/AskQuestion" element={<AskQuestion/>}></Route>
        <Route  path="/Questions/:id" element={<DisplayQuestion/>}></Route>
        <Route  path="/Tags" element={<Tags/>}></Route>
        <Route  path="/Users" element={<Users/>}></Route>
        <Route  path="/Users/:id" element={<UserProfile/>}></Route>
    </Routes>
  )
}

export default AllRoutes