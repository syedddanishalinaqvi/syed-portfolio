'use client'
import './globals.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import ParticleBackground from '@/components/Particles'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import ParticleBall from '@/components/Particles'


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div style={{ display: showSplash ? 'flex' : 'none' }} className="splash-screen">
        <b>Syed Dansih Ali Naqvi</b> - <p>PORTFOLIO</p>
      </div>
      <div style={{ display: showSplash ? 'none' : '' }} className='homepage'>
        <div className="border">
        <ParticleBall/>
          <div className="home-content">
            <Navbar />
            <div className="info">
              <p>Hi There!👋🏻
                i'm Danish. A passionate MERN Stack Developer based in India. I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️

                I am fluent in classics like C++ and Javascript.

                My field of Interest's are building new Web Technologies and Products and also developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js.

                Sometimes i also play games like Valorant, GTA5, CSGO .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
