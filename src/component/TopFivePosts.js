import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TopFivePosts = () => {
  const [Posts, SetPOsts] = useState([]);
  useEffect(() => {
    axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then(response => {
      SetPOsts(response.data.posts)
    })
  }, [])
  console.log(Posts)
  return (
    <div>
      <h1 className='heading'>Top-Five-Posts</h1>
      <div className='topPosts'>
        <div>
          {
            Posts.filter((result) => result.id === "613c9d70a3e4b056473cd1a3").map((result) =>
              <div>
                <a href='https://ghost-blog.ipxp.in/different-product-deployment-strategies-in-devops/' target={"blank"} ><img className='image-design' src={result.feature_image} alt="" /></a>
              </div>
            )
          }
        </div>
        <div>
          {
            Posts.filter((result) => result.id === "613c9d70a3e4b056473cd1a2").map((result) =>
              <div>
                <a href='https://ghost-blog.ipxp.in/centos-8-end-of-life-in-2021/' target={"blank"} ><img className='image-design' src={result.feature_image} alt="" /></a>
              </div>
            )
          }
        </div>
        <div>
          {
            Posts.filter((result) => result.id === "613c9d70a3e4b056473cd1a1").map((result) =>
              <div>
                <a href='https://ghost-blog.ipxp.in/all-you-need-to-know-about-blue-green-deployments/' target={"blank"} ><img className='image-design' src={result.feature_image} alt="" /></a>
              </div>
            )
          }
        </div>
        <div>
          {
            Posts.filter((result) => result.id === "613c9d70a3e4b056473cd19f").map((result) =>
              <div>
                <a href='https://ghost-blog.ipxp.in/continuous-integration-continuous-deployment-continuous-delivery/' target={"blank"}><img className='image-design' src={result.feature_image} alt="" /></a>
              </div>
            )
          }
        </div>
        <div>
          {
            Posts.filter((result) => result.id === "613c9d70a3e4b056473cd19c").map((result) =>
              <div>
                <a href='https://ghost-blog.ipxp.in/the-11-rules-of-gitlab-flow/' target={"blank"} ><img className='image-design' src={result.feature_image} alt="" /></a>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TopFivePosts