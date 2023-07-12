import React from 'react'

export default function Footer() {
  return (
    <div className=' flex bg-black justify-between items-center h-80 pb-0'>
        {/* 11111111 */}
        <div className='px-40'>
            <div className='pt-8'>
                <img src="./images/Logo.png" alt="logo" />
            </div>
            <div className='py-10'>
             <h1 className='text-white'>Copyright © 2020 Nexcent ltd.</h1>
             <h2 className='text-white'>All rights reserved</h2>
            </div>
            <div className='flex gap-4'>
             <img src="./images/footericon1.png" />
             <img src="./images/footericon2.svg" />
             <img src="./images/footericon3.png" />
             <img src="./images/footericon4.png" />
            </div>
        </div>

        {/* 2222222222 */}
       <div className='flex'>
         
         <div className='px-28 '>
          <ul>
            <li className='text-white py-4 text-xl'>Company</li>
            <li className='text-white'>About us</li>
            <li className='text-white'>Blog</li>
            <li className='text-white'>Contact us</li>
            <li className='text-white'>Pricing</li>
            <li className='text-white'>Testimonials</li>
          </ul>
         </div>
         <div>
         <ul>
           <li className='text-white py-4 text-xl'>Support</li>
           <li className='text-white'>Help center</li>
           <li className='text-white'>Terms of service</li>
           <li className='text-white'>legal</li>
           <li className='text-white'>Privacy policy</li>
           <li className='text-white'>Status</li>
           </ul>
         </div>
         <div className='px-28'>
            <h1 className='text-white py-4 text-xl'>Stay up to date</h1>
            <input type="text" className='rounded-md h-10 bg-slate-700' placeholder="  Your email address"></input>
         </div>

       </div>


    </div>
  )
}
