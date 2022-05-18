import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Page() {
    const [pages,setPages]=useState([]);

    useEffect(()=>{
        axios
        .get('https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d')
        .then(res =>{
            console.log(res);
            setPages(res.data.pages)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    let countpages=pages.length;

  return (
    <div className='posttotalBox'>     Total number of Pages<br/>
        ^{countpages}
    </div>
  )
}

export default Page