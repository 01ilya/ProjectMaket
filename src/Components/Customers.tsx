import React from 'react'

export default function Customers() {
  return (
    <div className='flex gap-10 px-32 py-10 bg-silver'>
        <div className='w-full h-full'>
          <img src="./images/image.png" className='h-full' />
        </div>

        <div className='py-8'>
         <h1>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</h1>
         <h2 className='pt-4'>Tim Smith</h2>
         <h3 className='pt-2'>British Dragon Boat Racing Association</h3>

         <div className='flex gap-8 pt-8 '>
            <div className='flex gap-10'>
          <img src="./images/log1.png"/>
          <img src="./images/log2.png"/>
          <img src="./images/log3.png"/>
          <img src="./images/log4.png"/>
          <img src="./images/log5.png"/>
          <img src="./images/log6.png"/>
            </div>
            <div className='flex'>
                <text>Meet all customers</text>
                <img src='./images/arrow.png'></img>
            </div>
         </div>

        </div>
    </div>
  )
}
