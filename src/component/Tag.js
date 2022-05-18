import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Tag() {
    const [tags,setTags]=useState([]);

    useEffect(()=>{
        axios
        .get('https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d')
        .then(res =>{
            console.log(res);
            setTags(res.data.tags)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    let counttages=tags.length;

  return (
    <div className='posttotalBox'>     Total number of Tags<br/>
     ^{counttages} 
    </div>
  )
}

export default Tag