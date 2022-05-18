import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link className='link' to={'./dashboard'}> <span className='navigation'>Dashboard</span></Link>
      <Link className='link' to={'./postlistpage'}>   <span className='navigation'>Pages_List_page</span></Link>
      <Link className='link' to={'./pagelistpage'}>   <span className='navigation'>Posts_List_Page</span></Link>
    </div>
  )
}

export default Header