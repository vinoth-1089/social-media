import { useState, useEffect } from "react";



function suggestion() {

  const [profile, setprofile] = useState(null)
  const [suggestion, setsuggestion] = useState([])


  useEffect(() => {
    fetch("https://instagaramdb.onrender.com/profile")
      .then((data) => {
        return data.json();
      })
      .then(data => setprofile(data))
      .catch(error => console.log(error))
  },[])

   useEffect(() => {
    fetch("https://instagaramdb.onrender.com/suggestion")
      .then((data) => {
        return data.json();
      })
      .then(data => setsuggestion(data))
      .catch(error => console.log(error))
  },[])
  return (

    <div className="suggetion-section mt-5">
      {profile && profile.map((pro, index) => (
        <div className="">

          <div key={index} className="d-flex flex-row " style={{ gap: "10px" }} >
            <img src={pro.user.profileImage} className="rounded-circle" style={{ width: "60px", height: "60px", objectFit: "contain" }} />
            <p className="mt-2 align-items-center ms-2">{pro.user.username}</p>
            <span className="ms-auto mt-2 text-primary">Switch</span>
          </div>

          <p className="mt-5 text-center " style={{color:"grey"}}>Suggested for you <span className="ps-5 ms-5 "><small>See All</small></span></p>
         {suggestion && suggestion.map((sugg,index)=>(
            <div key={index}className="follows d-flex flex-row mt-5">
              <img className="img-fluid rounded-circle" src={sugg.user.profileImage}  style={{ width: "60px", height: "60px", objectFit: "contain" }}  alt="" />
              <p className="mt-2 align-items-center ms-2">{sugg.user.username}</p>
              <span className="ms-auto mt-2 text-primary">Unfollow</span>
          </div>
         ))}

        </div>


      ))}


    </div>

  );
}

export default suggestion;