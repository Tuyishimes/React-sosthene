import image1 from '../Assets/images (2).jpg'
import image2 from '../Assets/images (1).jpg'
import image3 from '../Assets/download (2).jpg'
import React, { useEffect, useState } from 'react'


const sliderdata=[
    {
    image:image1 
  },
  
  {
    image:image2
  },
  {
    image:image3
  }
  ]
  const Backgroundslider =() =>{
    const [currentImage, setCurrentImage] =useState(0);
    useEffect(() =>{
      const interval =setInterval(() =>{
        setCurrentImage((preImage) =>(preImage+1) % sliderdata.length);
  
      },5000);
      return() =>clearInterval(interval);
    },[]);
    return(
        <div className=' h-screen bg-center flex  bg-cover'     style={{backgroundImage: `url(${sliderdata[currentImage]})`}} >

        </div>
    )
  };
  export default Backgroundslider;
    