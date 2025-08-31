import React from 'react'
import { useState, useEffect } from 'react'


const useFetch = () => {

    const [feed, setfeed] = useState([])
    const [profile,setprofile] = useState(null)

    useEffect(() => {
        fetch("https://instagaramdb.onrender.com/Posts")
            .then(data => {
                if (!data.ok) {
                    throw new Error("Network Issues")
                }
                return data.json();
            })
            .then(data => setfeed(data))
            .catch(error => console.log(error))

    }, [])


    useFetch(()=>{
        fetch("https://instagaramdb.onrender.com/profile")
        .then((data)=>{
            return data.json();
        })
        .then(data=>setprofile(data))
        .catch(error=>console.log(error))
    })

    return ({feed,profile});

}
export default useFetch