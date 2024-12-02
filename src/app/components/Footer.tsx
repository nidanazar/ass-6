

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from './constant/footerLinks'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'


const Footer = () => {
  return (
    <>
  <footer className='w-full xsm:p-[80px] px-[24px] py-[48px] flex flex-col gap-[80px] text-center xsm:text-start'>
    <div className='w-full flex xsm:flex-row flex-col justify-between items-center'>
<div className='w-[287px] xsm:w-auto flex flex-col xsm:flex-row gap-4 '>
<p className='text-[18px] leading-[150%] font-semibold'>Subscribe to our newsletter</p>
<p  className='text-[16px] leading-[150%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div className='flex gap-4 flex-col mt-[24px] xsm:mt-0'>
  <div className='flex gap-4 xsm:flex-row flex-col'>
    <Input placeholder='Enter your email' className='xsm:w-[265px] w-full h-[48px] border-black'/>
    <Button variant={"transparentsBtn"} className='w-full xsm:w-auto'>Subscribe</Button>
</div>
<p>By subscribing you agree to with our Privacy Policy</p>
</div>
</div>

<div className='w-full flex xsm:flex-row flex-col gap-10 text-center'>
  <div className='xsm:w-[250] h-[40px] inline-block xsm:block m-auto xsm:m-0'>
    <Image src="/dec.jpeg" alt="logo" width={130} height={40}></Image>
  </div>

  {footerLinks.map((item, index) => {
    return (
    <div className='w-[250px] flex flex-col gap-4 m-auto xsm:text-start' key={index}>
    <h4 className='text-[16px] leading-[150%] font-bold'> {item.Heading}</h4>
    
     <ul className='flex flex-col gap-2'>
      <li><Link href="B">{item.l1}</Link></li>
      <li><Link href="D">{item.l2}</Link></li>
      <li><Link href="T">{item.l3}</Link></li>
      <li><Link href="D">{item.l4}</Link></li>
      <li><Link href="P">{item.l5}</Link></li>
    </ul>
  </div>
)
  })}

  
</div>
<div className='w-full xsm:h-[57px] h-auto flex xsm:flex-row flex-col justify-between items-end border-t-[1px] borderd-black pt-[32px] xsm:pt-0 text-center'>
  <div className='flex xsm:flex-row flex-col gap-[24px]'>
    <p>2023 Ddsgnr. All right reserved.</p>
    <div></div>
    <Link href={"P"}>Privacy Policy</Link>
    <Link href={"T"}>Terms of Service</Link>
    <Link href={"C"}>Cookies Settings</Link>
    </div>
  </div>
  <div className='flex justify-end items-end gap-[12px] xsm:m-0 m-auto xsm:mt-0 mt-[24px]'>
    <FaFacebookF size={24}/>
      <FaInstagram  size={24}/>
      <FaTwitter size={24}/>
      <FaLinkedin size={24}/>
    </div>

</footer>
    </>
  )
}

export default Footer