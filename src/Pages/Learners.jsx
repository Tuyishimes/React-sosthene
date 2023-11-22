import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


const Learners = () => {
  const [student, setstudrnt]=useState([])
  useEffect(() =>{
    axios.get(`http://localhost:8081/users`)
    .then(res => setstudrnt(res.data))
.catch(err => console.log(err));
  }, [])
  const handledelete = (ID) =>{
   
       axios.delete("http://localhost:8081/delete"+ID )
       .then (  window.location.reload)
       .catch(err => console.log(err))
  }
  const btitem =[
    {path:"/About", link:"About"}
  ]


  
  
  return (
    <div >
      <div className='flex justify-center  items-center bg-white text-black'>
        
        <div className=' w-50 bg-gray-500 rounded'>
        {
          btitem.map(({path,link}) =>
          
           <NavLink to={path}>{link}</NavLink>
        
          )
            }
         
          <table className='table columns-4 rounded shadow-md p-3 px-4 gap-4 m-4 py-4 mx-6 '>
            <thead>
              <tr className=' px-3 ms-3 col-span-1 m-3 mb-2  gap-4 b-'>
                <th className='ms-3 px-3 py-2'>ID</th>
                <th>Name</th>
                <th>email</th>
                <th>Locaton</th>
              </tr>
            </thead>
<tbody>{
  student.map((data, i) => 
    <tr key={i}>
      <td>{data.ID}</td>
      <td>{data.Names}</td>
      <td className=' ms-4 mr-4 py-4 px-4'>{data.Email}</td>
      <td>{data.Home}</td>
      <td>
        <button className='bg-black text-white text-2xl rounded-lg p-4 ' onClick={()=>handledelete(data.ID)}> Update</button>
        <button className='bg-black ms-6 text-white text-2xl rounded-lg p-4 '> Delete</button>
      </td>
    </tr>
  )}
</tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Learners
