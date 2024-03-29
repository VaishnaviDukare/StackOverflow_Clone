import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import './UsersProfile.css'
import { updateProfile } from '../../actions/users'
const EditProfileForm = ({currentUser,setswitch}) => {
  const [name,setName]=useState(currentUser?.result?.name);
  const [about,setAbout]=useState(currentUser?.result?.about);
  const [tags,setTags]=useState('');
  const dispatch=useDispatch();
 console.log(tags);
  const handleSubmit = (e)=>{
         e.preventDefault();
         if( tags.length === 0){
          dispatch(updateProfile(currentUser?.result?._id,{name,about,tags:currentUser?.result?.tags}));
         }else{
          dispatch(updateProfile(currentUser?.result?._id,{name,about,tags}));
         }
        setswitch(false);
  }
  return (
    <div>
        <h1 className='edit-profile-title'>
          Edit your profile
        </h1>
        <h2 className='edit-profile-title-2'>
          Public Information
        </h2>
        <form className='edit-profile-form' onSubmit={handleSubmit}>
           <label htmlFor='name'>
             <h3>Display Name</h3>
             <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
           </label>
           <label htmlFor='about'>
              <h3>About Me</h3>
              <textarea id='about' cols='30' rows='10' value={about} onChange={(e)=>setAbout(e.target.value)}></textarea>   
           </label>
           <label htmlFor='tags'>
              <h3>Watched tags</h3>
              <p>Add tags separated by 1 spaces</p>
              <input type='text' id='tags' onChange={(e)=>setTags(e.target.value.split(' '))}/>
           </label><br/>
           <input type="submit" value="Save profile" className='user-submit-btn'/>
           <button type="button" className='user-cancel-btn' onClick={() => setswitch(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm;