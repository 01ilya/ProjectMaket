import React from 'react'

export default function Member() {
  return (
    <div className='pt-10 flex flex-col items-center'>
        <div>
          <h1>Manage your entire community in a single system</h1>
          <h2>Who is Nextcent suitable for?</h2>
        </div>

        <div className=' flex px-28 justify-between items-center py-5'> 
          <div>
            <img src='./images/icon1.png' className='px-36'></img>
            <h1>Membership Organisations</h1>
            <h2>Our membership management software provides full automation of membership renewals and payments</h2>
          </div>
          <div>
            <img src='./images/icon2.png' className='px-36'></img>
            <h1>National Associations</h1>
            <h2>Our membership management software provides full automation of membership renewals and payments</h2>
          </div>
          <div>
            <img src='./images/icon3.png' className='px-36'></img>
            <h1>Clubs And Groups</h1>
            <h2>Our membership management software provides full automation of membership renewals and payments</h2>
           </div>
        </div>
    </div>
  )
}
