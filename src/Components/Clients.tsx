import React from 'react'

export default function Clients() {
  return (
    <div className='flex  flex-col  items-center gap-8'>

        <div>
            <h1 className='px-96'>Our Clients</h1>
            <h2 className='px-80'>We have been working with some Fortune 500+ clients</h2>
        </div>

        <div className='flex gap-40 py-10'>
            <img src='./images/log1.png'></img>
            <img src='./images/log2.png'></img>
            <img src='./images/log3.png'></img>
            <img src='./images/log4.png'></img>
            <img src='./images/log5.png'></img>
            <img src='./images/log6.png'></img>
            <img src='./images/log7.png'></img>
        </div>

    </div>
  )
}
