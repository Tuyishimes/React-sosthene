import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ghill from '../Assets/green-hills-1-150x150.jpg'
import IbWorld from '../Assets/Untitled-05-1024x343.png'
// import image2 from '../Assets/Janitorial-team-services.webp'

// import image3 from '../Assets/Janitorial-team-services.webp'
import {RiSearch2Line} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'




const navItem=[
    {path:'/' , link:"Home"},
    {path:"/Education" , link:"Education"},
    {path:"/Learners", link:"Learners"},
    {path:"/Admission", link:"Admission"},
    {path:"/About", link:"About"},
    {path:"/Boarding", link:"Boarding"},
    {path:"/NewsEvents", link:"NewsAndEvents"},
    {path:"/Facilities", link:"Facilities"},
    {path:"/ContactUs", link:"ContactUs"}

]
 
// const sliderdata=[
  
//   '../Assets/Janitorial-team-services.webp',
//   '../Assets/Janitorial-team-services.webp',
//   '../Assets/Janitorial-team-services.webp',

// ];



const Banner = () => {
  const [kamy, setnav]=useState(false);
  const quenn =()=>{
    setnav(!kamy);
  }
  
  return (
    <div >
      <div className='grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 '>
<div className='flex py-32 pt-5  px-20 mr-2'> 
<img src={ghill} alt='GreenHills'/>
</div>
<div className='flex  py-28 px-0 pt-5  mr-9'>
<img src={IbWorld} alt='GreenHills'/> 
</div>
<div className='md:pt-5 md:mr-9'>
    <div className='items-center  flex text-center justify-between'> <button className='text-white bg-green-700 rounded-full py-4 p-3 pt-1 px-5 mx-4 my-0 md:my-28 float-right'>APPLY NOW <RiSearch2Line className='inline-flex '/> </button></div>
    
</div>
      </div>
      
      <div >
     {/* style={{backgroundImage: `url(${sliderdata[currentImage]})`}} */}

       {/*  style={{backgroundImage: `url(${image1})`}} */}
        <nav className='text-blackjustify-between top-10 bg-green-700 pt-9 px-5'  >
            <ul className='md:flex  gap-7 text-lg font-semibold hidden'>
                {
                    navItem.map(({path,link}) =><li> <NavLink to={path}>{link} </NavLink></li>)
                }
            </ul>
            <div  className=' text-white md:hidden'>
      
          <button onClick={quenn} className='cursor-pointer flex'> 
          {kamy ? <AiOutlineClose className=' inline-flex' size={40}/> : <FaBars size={40}/>}Menu </button>

      </div>
        </nav>
      </div>
      
      <ul className={kamy ? 'md:hidden block text-lg space-x-7 ':'hidden'}>{
        navItem.map(({path, link}) => <li>
          <NavLink  onClick={quenn} to={path}>{link}</NavLink></li>)}
      </ul>
      
    </div>
  )
}

export default Banner
