import React from 'react'

export default function Footer() {
  return (
    <div className=' flex bg-neutral-black justify-between items-start gap-[125px] px-[165px] py-10'>
        {/* 11111111 */}
        <div className='flex flex-col items-start gap-10 pt-6'>
            <div className='flex items-center gap-2'>
                <img src="./images/Logo.png" alt="logo" />
            </div>
            <div className='flex flex-col items-center gap-2'>
             <div className='Body-Regular-Body-3 text-neutral-silver'>Copyright © 2020 Nexcent ltd.</div>
             <div className='Body-Regular-Body-3 text-neutral-silver'>All rights reserved</div>
            </div>
            <div className='flex gap-4 items-start'>
             <img src="./images/footericon1.png" />
             <img src="./images/footericon2.svg" />
             <img src="./images/footericon3.png" />
             <img src="./images/footericon4.png" />
            </div>
        </div>

        {/* 2222222222 */}
       <div className='flex items-start gap-8'>
         
         <div className='flex flex-col items-start'>
          <div className='text-neutral-white pb-6'><h4>Company</h4></div>
            <ul className='flex flex-col  gap-3'>
            <li className='text-white'>About us</li>
            <li className='text-white'>Blog</li>
            <li className='text-white'>Contact us</li>
            <li className='text-white'>Pricing</li>
            <li className='text-white'>Testimonials</li>
          </ul>
         </div>
         <div className='flex flex-col items-start '>
          <div className='text-neutral-white pb-6'><h4>Support</h4></div>
         <ul className='flex flex-col  gap-3'>
           <li className='text-white'>Help center</li>
           <li className='text-white'>Terms of service</li>
           <li className='text-white'>legal</li>
           <li className='text-white'>Privacy policy</li>
           <li className='text-white'>Status</li>
           </ul>
         </div>
         <div className='flex flex-col items-start gap-6'>
            <h4 className=' Heading-Headline-4 text-neutral-white'>Stay up to date</h4>
            <input type="text" className='rounded-md h-10 bg-slate-700 w-64' placeholder="  Your email address">
            
              </input>
         </div>

       </div>


    </div>
  )
}
