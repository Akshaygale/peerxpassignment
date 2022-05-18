import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Post() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        axios
        .get('https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d')
        .then(res =>{
            console.log(res);
            setPosts(res.data.posts)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    let countposts=posts.length;

  return (
    <div className='posttotalBox another1'>   Total number of Posts  <br/>
     ^{countposts}
    </div>
  )
}

export default Post