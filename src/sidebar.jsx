import { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';


function navbar(){
    const [personal,setpersonal]=useState([]);


useEffect(()=>{
    fetch("https://instagaramdb.onrender.com/profile")
    .then(data =>{
        if(!(data.ok))
            throw new Error("Error in profile");
        return data.json();
        
            
    }).then(data =>setpersonal(data))
    .catch((err)=>console.log(err))
},[])


    return(
        <>
        <div className="">
            <div className="position-fixed">
                <h3 className="Instagram-Fontfamily mx-4 mt-4">Instagram</h3>

                <div className="side-bar Nav-bar mt-5 ">
                    <ul className="">
                        <div className="side-hover"><li className="my-4"><a href=""><i className="bi bi-house-door"></i> Home</a></li></div>
                        <div className="side-hover"> <li className="my-4"><a href=""><i className="bi bi-search"></i> Search</a></li></div>
                        <div className="side-hover"> <li className="my-4"><a href=""><i className="bi bi-compass"></i> Expolre</a></li></div>
                        <div className="side-hover">  <li className="my-4"><a href=""><i className="bi bi-camera2"></i> Reels</a></li></div>
                        <div className="side-hover"><li className="my-4"><a href=""><i className="bi bi-messenger"></i>Message</a></li></div>
                        <div className="side-hover">  <li className="my-4"><a href=""><i className="bi bi-heart"></i> Notifications</a></li></div>
                        <div className="side-hover"><li className="my-4"><a href=""><i className="bi bi-plus-square"></i> Create</a></li></div>
                    {personal.map(person =>(
                        <div key={person.id} className="side-hover"><Link to={`/profile/${person.user.username}`} className="my-4"><a href=""><i className="bi bi-person-fill"></i> Profile</a></Link></div>

                    ))}
                    </ul>
                    <ul className="nav-item position-fixed bottom-0">
                        <li className="my-4"><a href=""><i className="bi bi-list"></i> More</a></li>
                        <li className="my-4"><a href=""><i className="bi bi-threads"></i> Threads</a></li>
                    </ul>
                </div>
            </div> 
           
        </div>
       
        </>
        
    );

}
export default navbar