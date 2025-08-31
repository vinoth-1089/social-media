import Navbar from "./sidebar.jsx";
import Feed from "./feed.jsx";
import Suggestion from "./suggestion.jsx";
import Splash from "./splash.jsx";
import { useState, useEffect } from 'react'

function index(){

    
        const[load,setload]=useState(false);
    
        useEffect(()=>{
            const timer = setTimeout(() => {
                setload(true);
                
            },2000);
            return () => clearTimeout(timer);
        },[])
    
    
    return(
        <>
        { load? <div className=" container-fluid d-flex flex-row justify-content-between">
            <Navbar/>
            <Feed/>
            <Suggestion/>
     
        </div> : <Splash/>}
        </>
    );

}
export default index; 