import { useParams,Link,Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Story() {
  const { id,tot} = useParams(); // get id from URL
  const [story, setStory] = useState([[]]);
  // const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://instagaramdb.onrender.com/viewstory/${id}`)
      .then(res => res.json())
      .then(data => setStory(data))
      .catch(error => console.error(error));
  }, [id]);

 if (parseInt(id) > 10) {
  return <Navigate to="/" replace />;
}
if (parseInt(id) == 0) {
  return <Navigate to="/" replace />;
}
  return (
    <div className="">

      {story ? (

        <div className="">
            <div className="story  d-flex flex-row justify-content-center mx-auto ">
            <div className="live-story ">
                
                <div className="story-profile-section  flex gap-4 overflow-x-auto scrollbar-hide py-2 w-full">
                    <img className="m-3 story-ring" src={story.profileImage} alt={story.username} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "contain" }}/>
                    <p className="bg mt-4">@{story.username}</p>
                </div>
                
              <div className="">
                <Link to={`http://localhost:5173/viewstory/${parseInt(id) - 1}/${tot}`}><i className="bi bi-arrow-left-circle"></i></Link>
                  <img className="story-image" src={story.profileImage} alt={story.username}/>
               <Link to={`http://localhost:5173/viewstory/${parseInt(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle ms-3"></i></Link>
              </div>
                </div>
                <div className="reply-section d-flex flex-row">
                    <input className="p-3" type="text" name="" id="" placeholder={"Reply to "+story.username}/>
                   <div className="i">
                     <i className="bi bi-heart "></i>
                    <i className="bi bi-send"></i>
                   </div>
                </div>
          
            </div>
           
        </div>

      ) : 

      (
        <p>Loading story...</p>
      )}
    </div>

  );
}

export default Story;
