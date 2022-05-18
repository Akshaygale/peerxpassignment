import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PostsListPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d')
            .then(res => {
                console.log(res);
                setPosts(res.data.posts)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className='pagebox'>
            <div className='listpostBox'>
                <p className='headingBox' > List of Posts without Meta Description</p>
                <ul>
                    {posts.filter(result => result.meta_description == null).map(result =>
                        <div> <li>{result.title}</li>
                        </div>
                    )}
                </ul>
            </div>

            <div className='listpostBox newbox' >
                <p className='headingBox'>List of Posts without Featured Image</p>
                <ul>
                    {posts.filter(result => result.feature_image == null).map(result =>
                        <div> <p>{result.title}</p>
                        </div>
                    )}
                </ul>
            </div>

            <div className='listpostBox newbox' >
                <p className='headingBox'>Too long Meta Description</p>
                <ul>
                    {posts.filter(result => result.meta_description !== null).map(result =>
                        <div> <li>{result.title}</li>
                        </div>
                    )}
                </ul>
            </div>

            <div className='listpostBox newbox' >
                <p className='headingBox'>Too Short Posts, Below 250 words</p>  {/* suppose 1 word = 6 character appro 250*6=1500 */}
                <ul>
                    {posts.filter(result => result.html.length < 1500).map(result =>
                        <div> <li>{result.title}</li>
                            <p className='htmlword'>{result.html}</p>

                        </div>
                    )}
                </ul>
            </div>

            {<div className='listpostBox newbox' >
                <p className='headingBox'>Too long URL, more than 100 chars</p>
                <ul>
                    {posts.filter(result => result.url.length > 100).map(result =>
                        <div> <li>{result.title}</li>
                        </div>
                    )}
                </ul>
            </div>}

            <div className='listpostBox newbox' >
                <p className='headingBox'>Too Long Posts, More than 1500 words</p>
                <ul>
                    {posts.filter(result => result.html.length > 6000).map(result =>
                        <div> <li>{result.title}</li>
                        </div>
                    )}
                </ul>
            </div>






        </div>
    )
}

export default PostsListPage 