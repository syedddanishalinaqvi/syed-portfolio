'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../../css/Projects.css'
import ParticleBall from '@/components/Particles'

const page = () => {
    return (
        <div className="projects">
        <div className="border">
        <ParticleBall/>
          <div className="projects-content">
            <Navbar />
            <div className="projects">
              <Link target='_blank' href="https://github.com/syedddanishalinaqvi/online-Notebook"><div>
                <h3>Online Notebook</h3>
                <p>2023/MERN Stack</p></div></Link>
                <Link target='_blank' href="https://online-shopping-opal.vercel.app/"><div>
                <h3>Shop Your Desire</h3>
                <p>2023/E-Commerce</p></div></Link>
                <Link target='_blank' href="https://github.com/syedddanishalinaqvi/news-app"><div>
                <h3>News</h3>
                <p>2023/MERN stack</p></div></Link>
                <Link target='_blank' href="https://github.com/syedddanishalinaqvi/pic-search"><div>
                <h3>Pics Search</h3>
                <p>2023/React app</p></div></Link>
                <Link target='_blank' href="https://pistons.vercel.app/"><div>
                <h3>Piston</h3>
                <p>2023/Webpage</p></div></Link>
            </div>
          </div>
        </div>
        </div>
    )
}

export default page
