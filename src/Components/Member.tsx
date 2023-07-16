import React from 'react'

export default function Member() {
  return (
    <div className='pt-10 flex flex-col items-center px-10 gap-4'>
    
        <div className='text-center px-96'>
          <h2 className='text-neutral-d-grey'>Manage your entire community in a single system</h2>
          <div className='Body-Regular-Body-2 text-neutral-grey pt-2'>Who is Nextcent suitable for?</div>
        </div>

        <div className=' flex px-36 py-4 justify-between items-center gap-12'> 
          
          <div className=' flex flex-col items-center py-6 px-8 gap-2 rounded-lg shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] bg-neutral-white'>
            <div className='flex w-64 flex-col items-center gap-16'>
              <img src='./images/icon1.png' ></img>
              <h3 className=' self-stretch flex flex-col justify-center text-center'>Membership Organisations</h3>
            </div>
           <div className='Body-Regular-Body-3 text-center text-neutral-grey flex flex-col w-64'>Our membership management software provides full automation of membership renewals and payments</div>
          </div>


          <div className='flex flex-col items-center py-6 px-8 gap-2 rounded-lg shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] bg-neutral-white '>
            <div className='flex w-64 flex-col items-center gap-16'>
              <img src='./images/icon2.png' ></img>
              <h3 className=' self-stretch flex flex-col justify-center text-center'>National Associations</h3>
            </div>
            <div className='Body-Regular-Body-3 text-center text-neutral-grey flex flex-col w-64'>Our membership management software provides full automation of membership renewals and payments</div>
          </div>


          <div className='flex ] flex-col items-center py-6 px-8 gap-2 rounded-lg shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] bg-neutral-white '>
            <div className='flex w-64 flex-col items-center gap-16'>
              <img src='./images/icon3.png'></img>
              <h3 className=' self-stretch  flex flex-col justify-center text-center pr-2'>Clubs And Groups</h3>
            </div> 
            <div className='Body-Regular-Body-3 text-center text-neutral-grey flex flex-col w-64'>Our membership management software provides full automation of membership renewals and payments</div>
           </div>


        </div>
    </div>
  )
}
