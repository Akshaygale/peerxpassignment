import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PagesListPage() {

  const[posts,setPosts]=useState([]);

  useEffect(()=>{
    axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d')
          .then(res=>{
            console.log(res);
              setPosts(res.data.posts);
          })
          .catch(err=>{
            console.log(err);
          })
  })

  return (
    <div>
        <div>
        {posts.map(result =>
          <div> 
            <p>[{result.published_at[6]} + {result.feature_image[6]}]</p>
          </div>
      )}
        </div>
    </div>
  )
}

export default PagesListPage