import React from 'react'

export default function Clients() {
  return (
    <div className='flex  flex-col py-10 items-center gap-8'>

        <div>
            <h2 className=' text-neutral-d-grey px-96 text-center'>Our Clients</h2>
            <h6 className=' text-neutral-grey px-80 text-center pt-2'>We have been working with some Fortune 500+ clients</h6>
        </div>

        <div className='flex gap-40 py-10'>
            <img src='./images/Log1.svg'></img>
            <img src='./images/Log2.svg'></img>
            <img src='./images/Log3.svg'></img>
            <img src='./images/Log4.svg'></img>
            <img src='./images/Log5.svg'></img>
            <img src='./images/Log6.svg'></img>
            <img src='./images/Log7.svg'></img>
        </div>

    </div>
  )
}
