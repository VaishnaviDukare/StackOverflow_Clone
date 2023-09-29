import React, { useState } from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBirthdayCake, faPen} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import './UsersProfile.css'
const UserProfile = () => {
    const {id}=useParams()
    const users=useSelector((state)=> state.usersReducer)
    const currentUser=useSelector((state) => state.currentUserReducer)
    const currentProfile=users.filter((user)=>user._id === id)[0]
    const [Switch,setswitch]=useState(false);
    
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
        <section>
            <div className='users-details-container'>
               <div className='user-details'> 
                    <Avatar  backgroundColor="purple" color="White" fontSize="50px" px="40px" py="30px">
                        {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
             
               <div className='user-name'>
                 <h1>{currentProfile?.name}</h1>
                 <p><FontAwesomeIcon icon={faBirthdayCake}/> Member for {moment(currentProfile?.joinedOn).fromNow()}</p>
               </div>
            </div>
            {
              currentUser?.result._id === id && (
                <button type="button" onClick={ ( )=>setswitch(true)} className='edit-profile-btn'>
                    <FontAwesomeIcon icon={faPen}/> Edit Profile
                </button>
              )

              
            }
            </div> 
            <>
              {
                Switch?(
                  <EditProfileForm currentUser={currentUser} setswitch={setswitch} />
                ):(
                  <ProfileBio currentProfile={currentProfile}/>
                )

                
              }
            </> 
        </section>
    </div>
    </div>
  )
}
export default UserProfile;