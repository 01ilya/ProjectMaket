import React from 'react'

export default function Header() {
  return (
    <div className='flex px-28 justify-between items-center py-5 bg-neutral-silver'>
      
      <div>
        <img src='./images/Logo01.png'></img>
      </div>

      <ul className='flex gap-12'>
        <li className='Body-Medium-Body-2 text-gray-900'><a href='#home'>Home</a></li>
        <li className='Body-Regular-Body-2 text-gray-900'><a href='#service'>Service</a></li>
        <li className='Body-Regular-Body-2 text-gray-900'><a href='#feature'>Feature</a></li> 
        <li className='Body-Regular-Body-2 text-gray-900'><a href='#product'>Product</a></li>
        <li className='Body-Regular-Body-2 text-gray-900'><a href='#Testimonial'>Testimonial</a></li>
        <li className='Body-Regular-Body-2 text-gray-900'><a href='#faq'>FAQ</a></li>
      </ul>

      <div className='flex gap-3.5 w-18 h-10'>
        <button className='bg-neutral-silver text-brand-primary Label-Medium-Label w-20'><text>login</text></button>
        <button className='bg-brand-primary rounded-md text-base Label-Medium-Label text-white indenty-5 indentx-2 w-20'>Sing up</button>
      </div>

    </div>
  )
}
