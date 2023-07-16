import React from 'react'

export default function Achievements() {
  return (
    <div className='flex px-10 py-16 items-center justify-center gap-10 bg-neutral-silver'>
<div className='w-[540px]'>
    <h2>Helping a local <h2 className='text-brand-primary'>business reinvent itself</h2></h2>
    <div className='Body-Regular-Body-2 text-gray-900'>We reached here with our hard work and dedication</div>
</div>

    <div className='flex flex-col gap-10 items-center w-[540px]'>
      
    <div className='flex items-center gap-8'>

     <div className='flex items-center gap-4 w-64 h-16'>
              <img src='./images/ic1.png' ></img>
              <div>
                  <h3  className='text-neutral-d-grey'>2,245,341</h3>
                  <div className=' Body-Regular-Body-2 text-neutral-grey'>Members</div>
               </div>
      </div>

      <div  className='flex items-center gap-4 w-64 h-16'>
              <img src='./images/ic2.png'></img>
              <div>
                <h3 className='text-neutral-d-grey'>46,328</h3>
                <div className=' Body-Regular-Body-2 text-neutral-grey'>Clubs</div>
              </div>
      </div>

    </div>

  <div className='flex items-center gap-8 '> 

      <div  className='flex items-center gap-4 w-64 h-16'>
        <img src='./images/ic3.png'></img>
        <div>
          <h3  className='text-neutral-d-grey'>828,867</h3>
          <div className=' Body-Regular-Body-2 text-neutral-grey'>Event Bookings</div>
        </div>
      </div>


      <div  className='flex items-center gap-4 w-64 h-16'>
        <img src='./images/ic4.png'></img>
        <div >
          <h3  className='text-neutral-d-grey'>1,926,436</h3>
          <div className=' Body-Regular-Body-2 text-neutral-grey'>Payments</div>
        </div>
      </div> 


    </div>
    </div>
    </div>
  )
}
