import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='footer'>
            <Link href="/" style={{ paddingLeft: "40px" }}><Image src={github} height={40} /></Link>
            <Link href="/" style={{ paddingLeft: "40px" }}><Image src={instagram} height={40} /></Link>
            <Link href="/" style={{ paddingLeft: "40px" }}><Image src={twitter} height={40} /></Link>
            <Link href="/" style={{ paddingLeft: "40px" }}><Image src={linkedin} height={40} /></Link>
        </div>
    )
}

export default Footer
