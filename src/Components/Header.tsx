import React from 'react'

export default function Header() {
  return (
    <div className='flex px-28 justify-between items-center py-5'>
      
      <div>
        <img src='./images/Logo01.png'></img>
      </div>

      <ul className='flex gap-12'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#feature'>Feature</a></li> 
        <li><a href='#product'>Product</a></li>
        <li><a href='#Testimonial'>Testimonial</a></li>
        <li><a href='#faq'>FAQ</a></li>
      </ul>

      <div className='flex gap-3 w-28 h-8'>
        <button className='rounted-md text-shade-1'><text className=''>login</text></button>
        <button className='bg-primary rounded-md text-base text-white indenty-5 indentx-2 w-28'>Sing up</button>
      </div>

    </div>
  )
}
