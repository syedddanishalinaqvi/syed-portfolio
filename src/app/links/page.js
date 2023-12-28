'use client'
import React from 'react'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import Image from 'next/image'
import Link from 'next/link'
import ParticleBall from '@/components/Particles'
import Navbar from '@/components/Navbar'
import '../globals.css'
import '../../css/Links.css'

const page = () => {
    return (
        <div className='links'>
            <div className="border">
                <ParticleBall/>
                <div className="links-content">
                    <Navbar />
                    <div className="links">
                        <Link href="/"><div>
                        <Image src={linkedin} height={40} />
                            <p>LinkedIn</p></div></Link>
                        <Link href="/"><div>
                        <Image src={github} height={40} />
                            <p>2023/E-Commerce</p></div></Link>
                        <Link href="/"><div>
                        <Image src={twitter} height={40} />
                            <p>2023/MERN stack</p></div></Link>
                        <Link href="/"><div>
                        <Image src={instagram} height={40} />
                            <p>2023/React app</p></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
