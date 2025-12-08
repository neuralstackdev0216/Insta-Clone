import React, { useEffect,useState } from 'react'

function Posts() {

    const [posts,setPosts]=useState([]);
    useEffect(()=>{

        fetch('http://localhost:3000/posts').
        then((data)=>data.json()).
        then((data)=>setPosts(data)).
        catch(err=>console.log(err))

},[]);

  return (
    <div>
        {posts.length>0 ?(
            <div>
                {posts.map((post)=>(
                    <div key={post.id}>
                       <div></div>
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