import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PagesListPage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d')
      .then(res => {
        console.log(res);
        setPosts(res.data.posts);
      })
      .catch(err => {
        console.log(err);
      })
  })

  let count = posts.length + posts.length;
  let extrcount = 4  /* we provide 4 link*/
  let coutall = count + extrcount

  return (
    <div className='pagelsipage'>
      <div className='linkingbox'> List of Internal Links
        {posts.map(result =>
          <ul className='headingpagrs' >
            <li>{result.url}</li> {/*  14 link + 14 = 29 */}
            <li>{result.feature_image}</li> {/*  14 link + 15 = 29 */}
          </ul>
        )}
      </div>
      <div>
        <div className='anotherbox'>
          Number of Internal Links <br />
          <div> ^{count}
          </div>
        </div>

        <div className='anotherbox'> Number of External Links <br />
          ^{extrcount}
        </div>

        <div className='anotherbox'> Total Number of  Links <br />  {/*  29+4=33 link */}
          ^{coutall}
        </div>
      </div>

      <div className='linkingbox2'>List of Broken Internal Links (from all the Ghost posts)
        {posts.map(result =>
          <ul className='headingpagrs2' >
            <div>{result.feature_image !== null}</div>
          </ul>
        )}
      </div>


    </div>
  )
}
export default PagesListPage