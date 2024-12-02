import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Button } from '@/components/ui/button';




function AboutUs() {
  return (
    <>
        <section className='w-full xsm:py-[112px] py-[48px] text-center'>
          <h1 className='my_h1 mb-[24px]'>our team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

<div className='w-full h-[723px] xsm:h-auto grid xsm:grid-cols-3 grid-cols-1 xsm:grid-rows-2 gap-x-[48px] xsm:gap-y-[64px] gap-y-[48px] xsm:mt-[80px] mt-[48px] overflow-y-auto'>
  {[...Array(6)].map((_, index) => (

    <div className='flex flex-col justify-center' key={index}>
              <div className='inline-block m-auto mb-[24px]'>
            <Image src="/p1.jpeg" alt="p.1" width={80} height={80}></Image>
            </div>
            
            <h1 className='text-[20px] leading-[150%] font-semibold '>James Nduku</h1>
            
            <p className='text-[18px] leading-[150%] mb-[24px]'>Marketing Coordinator</p>
            
            <div className='flex gap-[14px] justify-center m-auto'>
            <FaLinkedin size={24}/>
            <FaTwitter size={24}/>
            <CiGlobe size={24}/>
            </div>
           </div>
            ))}
          </div> 
          <Button variant="transparentsBtn" className='mt-[48px] xsm:hidden'>View All</Button>
        </section>
    </>
  )
}

export default AboutUs