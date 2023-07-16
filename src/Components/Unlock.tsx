import React from 'react'

export default function Unlock() {
  return (
    <div className='flex px-36  justify-center items-center' >
        <img className='py-12' src='./images/unlock.png'></img>
        <div className='flex w-[601px] flex-col items-start gap-4 shrink-0'>
            <h2 className='text-neutral-d-grey flex flex-col self-stretch'>The unseen of spending three years at Pixelgrade</h2>
            <div className='flex flex-col  self-stretch Body-Regular-Body-3 text-neutral-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</div>
           <div className='pt-10'>
              <button className='  bg-brand-primary rounded-md text-base text-white indenty-5 indentx-2 w-36 h-12'>Learn More</button>
           </div>
        </div>
    </div>
  )
}
