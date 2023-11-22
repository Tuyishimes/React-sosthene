import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [student, setstudent]=useState({
  ID:null,
  Names:" ",
  Email:" ",
  Home:" "
  })
  const navgate=useNavigate()
  const handlechange =(e) =>{
setstudent(prev=>({...prev,[e.target.name]:e.target.value}))
  };
  const handleclick =async (e)=>{
    e.preventDefault();
    try {
      
      await axios.post(`http://localhost:8081/add`, student)
      navgate("/Learners")
    } catch (error) {
      console.log(error)
    }
  }
  console.log(student)
  return (
    <div>
      
<div className='text-black grid '>
  
    <h2>Add users </h2>

    <div className='mb-2  '> 
    <label>ID</label><input  type='text' className='form-control bg-gray-600' onChange={handlechange} name='ID'/><br/>
    <label>names</label><input  type='text' className='form-control bg-gray-600' onChange={handlechange}  name='Names'/><br/>
    <label>Emails</label><input type='text' className='form-control bg-gray-500' onChange={handlechange}  name='Email'/><br/>
   
    <label>Home</label><input type='text' className='form-control bg-gray-500'  onChange={handlechange}  name='Home'/><br/>
    </div>
  
  <button onClick={handleclick}>add student</button>
</div>
    </div>
  )
}

export default About
