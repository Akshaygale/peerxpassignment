import React from 'react'
import Page from '../component/Page'
import Post from '../component/Post'
import Author from '../component/Author'
import Horizontalchart from '../component/Horizontalchart'
import Tag from '../component/Tag'
import TopFivePosts from '../component/TopFivePosts'

function Dashboard() {
  return (
    <div className='allbox'>
        <Post/>
        <Page/>
        <Author/>
        <Tag/>
        <TopFivePosts/>
        <Horizontalchart/>
    </div>
  )
}

export default Dashboard