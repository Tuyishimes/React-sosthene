import React from 'react'
import image1 from '../Assets/Janitorial-team-services.webp'
import {BsPeopleFill} from 'react-icons/bs'
import {FcKey} from 'react-icons/fc'
import {FiDownloadCloud} from 'react-icons/fi'
import {FaCampground} from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <div  className=' h-[35rem]   text-center content-centeritems-center content-center' style={{backgroundImage: `url(${image1})`}} >
<p className='md:text-3xl sm:text-lg font-semibold text-black md:pt-48'> Bringing outBRILLIANCE IN EVERY child</p>
</div>
<div className='grid md:grid-cols-4 mr-32 ml-32 py-10  grid-cols-2 gap-3 m'>
  <div className='p-5 pb-6 mr-4 mx-7 shadow-md rounded-s-3xl m-6 rounded'>
  <BsPeopleFill className='bg-green-600 items-center' size={40}/>
    <h1 className='text-5xl font-bold text-green-700'>2000</h1>
    <p>Learners</p>
  </div>
  <div className='  bg-gray-200'>
  <FcKey size={20}/>
    <h1>2000</h1>
    <p>Learners</p>
  </div>
  <div className='p-3  bg-gray-200'>
  <FiDownloadCloud size={20}/>
    <h1>2000</h1>
    <p>Learners</p>
  </div>
  <div className='p-3  bg-gray-200'>
  <FaCampground size={20}/>
    <h1>2000</h1>
    <p>Learners</p>
  </div>
  
</div>
<div className='h-[50rem]' style={{background: `url(${image1})`  } }>

  </div>
    </div>
  )
}

export default Home
