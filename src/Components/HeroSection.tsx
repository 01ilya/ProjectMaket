import React from 'react'




const HeroSection = () => {
  return (
    
       <div className='flex px-36 items-center justify-between py-24 gap-12'> 
        
        <div>
         <div>
            <h1 className='text-neutral-d-grey'>
              Lessons and insights 
              <h1 className='text-brand-primary'>
              from 8 years
              </h1>
            </h1>
          </div>

          <div className='Body-Regular-Body-2' >Where to grow your business as a photographer: site or social media?</div>
          <div className='h-12 w-32 mt-8'>
            <button className=' bg-brand-primary rounded text-base text-neutral-white w-32 h-14 Body-Medium-Body-2'>Registr</button>
          </div>
        </div>

         <div>
            <img src='./images/illustration.png' width={391} height={407} ></img>
         </div>
      </div>
    
  )
}

export default HeroSection;
