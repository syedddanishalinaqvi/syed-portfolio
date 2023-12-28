import Link from 'next/link'
import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h2>Syed Danish Ali Naqvi</h2>
        <p>Full Stack Developer</p>
      </div>
      <Link legacyBehavior href='/'><a>Home</a></Link>
      <Link legacyBehavior href='/links'><a>Links</a></Link>
      <Link legacyBehavior href='/projects'><a>Projects</a></Link>
      <Link legacyBehavior href='/'><a>Contacts</a></Link>
    </div>
  )
}

export default Navbar
