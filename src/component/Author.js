import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Author() {
    const [authors,setAuthors]=useState([]);

    useEffect(()=>{
        axios
        .get('https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d')
        .then(res =>{
            console.log(res);
            setAuthors(res.data.authors)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    let countauthor=authors.length;

  return (
    <div className='posttotalBox'>     Total number of Authors<br/>
     ^{countauthor}
    </div>
  )
}

export default Author