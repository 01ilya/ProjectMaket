import React from 'react'

export default function Updates() {
  return (
    <div className='flex justify-center flex-col py-10 px-28'>
      <div className='px-28 gap-5 align-start'>
        <h1>Caring is the new marketing</h1>
        <h2>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</h2>
      </div>
      <div className='flex justify-between'>

         <div className='relative'>
             <img  src="./images/image01.png"/>
             <div className='bg-silver rounded-md absolute w-80 h-44 top-56 left-6'>
              <h1 className='text-center pt-6 px-10'>Creating Streamlined Safeguarding Processes with OneRen</h1>
              <h2 className='text-center pt-10'>Readmore</h2>
             </div>
         </div>

         <div className='relative'>
             <img src="./images/image02.png"/>
             <div className='bg-silver rounded-md absolute w-80 h-44 top-56 left-6'>
              <h1 className='text-center pt-6 px-10'>What are your safeguarding responsibilities and how can you manage them?</h1>
              <h2 className='text-center pt-10'>Readmore</h2>
             </div>
         </div>

         <div className='relative'> 
             <img  src="./images/image03.png"/>
             <div className='bg-silver rounded-md absolute w-80 h-44 top-56 left-6'>
              <h1 className='text-center pt-6 px-10'>Revamping the Membership Model with Triathlon Australia</h1>
              <h2 className='text-center pt-16'>Readmore</h2>
             </div>
         </div>

      </div>
    </div>

  )
}
