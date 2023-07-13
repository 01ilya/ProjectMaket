import React from 'react'

export default function Updates() {
  return (
    <div className='flex justify-center flex-col items-center py-10 px-28'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-neutral-d-grey text-center'>Caring is the new marketing</h2>
        <div className='Body-Regular-Body-2 text-neutral-grey text-center w-[628px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</div>
      </div>
      <div className='flex justify-between items-start w-18'>

         <div className='flex flex-col items-center gap-[-96px]'>
             <img  src="./images/image01.png" width={368} height={286} className=' rounded-lg '/>
             <div className='flex  flex-col items-center gap-4 rounded-lg bg-neutral-silver'>
              <h4 className='text-center text-neutral-grey w-[258px]'>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <h4 className='text-center pt-10'>Readmore</h4>
             </div>
         </div>

         <div className='flex flex-col items-center gap-[-96px] px-6'>
             <img src="./images/image02.png" width={368} height={286} className=' rounded-lg '/>
             <div className='flex  flex-col items-center gap-4 rounded-lg bg-neutral-silver '>
              <h4 className='text-center text-neutral-grey w-[258px]'>What are your safeguarding responsibilities and how can you manage them?</h4>
              <h4 className='text-center pt-10'>Readmore</h4>
             </div>
         </div>

         <div className='flex flex-col items-center gap-[-96px]'> 
             <img  src="./images/image03.png" width={368} height={286} className=' rounded-lg '/>
             <div className='flex flex-col items-center gap-4 rounded-lg bg-neutral-silver '>
              <h4 className='text-center text-neutral-grey w-[258px]'>Revamping the Membership Model with Triathlon Australia</h4>
              <h4 className='text-center pt-16'>Readmore</h4>
             </div>
         </div>

      </div>
    </div>

  )
}
