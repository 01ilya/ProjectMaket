import React from 'react'




const HeroSection = () => {
  return (
    <div className='flex px-28 justify-between items-center py-10'>
        
        <div>
          <h1 className='h1 flex direction-column'>Lessons and insights from 8 years</h1>
          <h3>Where to grow your business as a photographer: site or social media?</h3>
          <button className='bg-primary rounded text-base text-white w-28 h-8'>Registr</button>
        </div>

        <div>
            <img src='./images/illustration.png'></img>
        </div>
    </div>
  )
}

export default HeroSection;
