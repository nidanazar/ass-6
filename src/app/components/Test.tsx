import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

function Test() {
  return (
    <>
    <section className='w-full xsm:px-[64px] px-[24px] py-[112px]'>

    <h1 className='my_h1 mb-[24px]'>Customer testimonials</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <div className=' mt-[80px] w-full flex flex-row gap-[32px] overflow-x-auto'> 

  {[...Array(3)].map((_,index)=>{return(

        <div className='shrink-0 grow-0 p-[32px] w-[362px] border-[1px] border-black'key={index}>
            <div className='flex gap-[1px] mb-[24px]'>
            <FaStar size={20}/>
            <FaStar size={20}/>
            <FaStar size={20}/>
            <FaStar size={20}/>
            <FaStar size={20}/>
            </div>
            <p className='mb-[24px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

            <div className='flex gap-[20px]'>
              <div className='w-[56px] h-[56px] rounded-full overflow-hidden'>
                <Image src="/tt1.jpeg" alt="tt1" width={56} height={56}></Image>
              </div>
             
              <div className='h-full flex flex-col justify-start'>
                <p>James Nduku</p>
                <p>Software Developer</p>
              </div>
            </div>
          </div>
  )})}
    </div>
   </section>
    </>
)
}

export default Test