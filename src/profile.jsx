import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import  './profile.css'



function profile() {
    const [profile,setprofile]=useState([])

    useEffect(()=>{
        fetch("https://instagaramdb.onrender.com/profile")
        .then((data)=>{
            if(!data.ok)
            {
                throw new Error("Error i profile page");
            }
            return data.json()
        }).then((data)=>setprofile(data))
        .catch((err)=>console.log(err))
    },[])




  return (
    <>
        <div className="">
            <Sidebar/>
        </div>
       {profile.map(pro=>(
        <div className="p">
            <div className="propic">
                <img className="" src={pro.user.profileImage} alt="" />
            </div>
             <p>{pro.user.username}</p>
        </div>
       
       ))}
    
    
    </>
  )
}

export default profile