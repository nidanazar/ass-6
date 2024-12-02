import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <>
    <section>

{/* top div */}
        <div className= "flex flex-col xsm:flex-row">

{/* left div */}

<div className="w-full xsm:w-1/2 py-[64px] xsm:py-[250px] px-[24px] xsm:px-[0] flex justify-center items-center">
<div className='w-full px-0 xsm:px-[80px]'>
<h1 className='text-[40px] xsm:text-[56px] leading-[120%] font-bold mb-[24px]'>Learn new skills online with ease</h1>
<p className='text-[18px] leading-[150%] mb-[40px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

<Button className='mr-[16px]'>Start learning now</Button>
<Button variant={"transparentsBtn"}>Explore Courses</Button>
</div>
</div>

{/* right div */}
<div className='w-full xsm:w-1/2 h-[390px] xsm:h-[800px] flex justify-center overflow-hidden'>
<Image src="/main.png" alt="main Image" width={640} height={900} className="
            w-[428px] xsm:w-[640px]
            h-[600px] xsm:h-[900px]
            "></Image>
        </div>
        </div>
    
  
  {/* bottom div */}
    <div className='w-full py=[48px] xms:py-[80px] px-[24px] xms:px-[8px] flex flex-col xsm:flex-row items-center gap-[24px] xsm:gap-0'>
        <div className='w-[320px]'>
        <p className='text-[24px] leading-[140%] font-bold'>Trusted by 2000+ companies worldwide.</p>
        </div>
        <div className='flex gap-[16px] msx:gap-[19px] overflow-x-auto bg-[#F7F7F7]'>
            <Image src={"/imge1.png"} alt="logo" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image> 
            <Image src={"/image2.png"} alt="logo" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
            <Image src={"/image3.png"} alt="logo" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
            <Image src={"/image4.png"} alt="logo" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
            <Image src={"/image5.png"} alt="logo" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
            <Image src={"/image6.png"} alt="logo" width={124} height={38} className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]'></Image>
            </div>
    </div>
    
    </section>
</> 
 )
}

export default Hero