import React, { useEffect,useState } from 'react'

function Posts() {

    const [posts,setPosts]=useState([]);
    useEffect(()=>{

        fetch('http://localhost:3000/posts'). //db la irunthu post a edukurom
        then((data)=>data.json()). //json a maathanum
        then((data)=>setPosts(data)). //setPosts kku store pnrom
        catch(err=>console.log(err)) //error iruntha log pnna slrom

},[]); //useEffect thirumba thirumba call aagama irukka [] use pnrom kadaisya

//datas a fetch pnniyachi ini datas a components a render pnnanum


//posts illatti loading post nu varum illatti posts display aagum
  return (
    <div className='d-flex justify-content-center'>
        {posts.length>0 ?(
            <div>
                {posts.map((post)=>(
                    <div className='my-3' key={post.id}>
                        <div className='d-flex'>
                           <img  className="dp rounded-circle"
                           src={post.user.profile_pic} /> 
                           <h5>{post.user.username}</h5>
                        </div>
                        <img className='image' src={post.image} alt="" />
                        <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                        </div>
                        <div>
                            <b>{post.likes} Likes</b>
                        </div>
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        ):(
            <div>
                Loding Posts
            </div>
        )}
    </div>
  )
}

export default Posts