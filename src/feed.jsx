
import useFetch from "./useFetch";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function feed() {

    const [feed, setfeed] = useState([])
    const [stories, setstories] = useState([])
    const navigate = useNavigate()
    let tot = 0;
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


    useEffect(() => {
        fetch("https://instagaramdb.onrender.com/story")
            .then(data => {
                if (!data.ok) {
                    throw new Error("Network Issues")
                }
                return data.json();
            })
            .then(data => setstories(data))
            .catch(error => console.log(error))


    }, [])

    function handlelike(id, currentlike, liked) {
        const like = liked ? currentlike - 1 : currentlike + 1;

        fetch(`https://instagaramdb.onrender.com/Posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: like, liked: !liked }),
        })
            .then((res) => res.json())
            .then((updatedPost) => {

                setfeed((prevFeed) =>
                    prevFeed.map((post) =>
                        post.id === updatedPost.id ? updatedPost : post
                    )
                );
            })
            .catch((err) => console.log("Error updating likes:", err));
    }


    tot = stories.length;

    return (
        <>

            <div className="feeds-sec">

                <div className="stories-section d-flex flex-row gap-5 px-3 overflow-x-auto scrollbar-hidden py-1 w-full mt-3">
                    <div className="">


                    </div>
                    {stories.map((story) => (


                        <div key={story.id} className="flex flex-col items-center cursor-pointer scrollbar-hide" onClick={() => { navigate(`/viewstory/${story.user.id}/${tot - story.user.id}`) }}>
                            <div className="">
                                <img
                                    className="rounded-circle story-ring  cursor-pointer " src={story.user.profileImage} alt={story.user.username} style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                                <p className=" text-truncate " style={{ maxWidth: '50px', overflow: 'hidden' }}>{story.user.username}</p>
                            </div>
                        </div>


                    ))}
                </div>
                <div className="feed-section">
                    {feed.filter(post=>post.image).map(post =>
                        <div className="feeds pb-5" key={post.id}>
                            <div className="">
                                <div className="profile-section d-flex mt-4">
                                    <div className="stories-user me-2">
                                        <img className="profile-image rounded-circle" src={post.user.profileImage} alt="" />
                                    </div>
                                    <div className="">
                                        <p>{post.user.username}</p>
                                        <small>{post.user.location}</small>
                                    </div>
                                </div>
                                <div className="post-image d-flex justify-content-center mt-4">
                                    <img className="img-fluid" src={post.image} alt="" />
                                </div>
                                <div className="d-flex justify-content-start mx-2 mt-3 gap-3">
                                    <i className={`bi bi-heart${post.liked ? "-fill" : ""}`} onClick={() => handlelike(post.id, post.likes, post.liked)} style={{ color: post.liked ? "red" : "transparent", cursor: "pointer" }}></i>
                                    <i className="bi bi-chat"></i>
                                    <i className="bi bi-send"></i>
                                    <i className="bi bi-bookmark ms-auto"></i>
                                </div>
                                <div className="mx-2 mt-2">
                                    <p>{post.likes}Likes</p>
                                    <small>{post.caption.hashtags}</small>
                                    <p>{post.caption.emojis}</p>
                                </div>
                            </div>
                            <div className="">
                                <hr />
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    );
}
export default feed;