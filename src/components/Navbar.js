import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav>
      
       <Link to ="/show">show</Link>
       <Link to ="/file" style={{marginLeft:"30px"}}>File</Link>
       </nav>
    </div>
  )
}

export default Navbar;