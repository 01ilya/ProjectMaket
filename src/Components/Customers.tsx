import React from 'react'
import ArrowRight from "../assets/ArrowRight"

export default function Customers() {
  return (
    <div className='flex gap-10 px-36 py-8 bg-silver'>
          <img src="./images/image.png" width={326} height={326} className='h-full' />

        <div >
         <h1>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</h1>
         <h2 className='pt-4 text-primary'>Tim Smith</h2>
         <h3 className='pt-2'>British Dragon Boat Racing Association</h3>

         <div className='flex gap-8 pt-8 '>
            <div className='flex gap-10 h-12 items-center'>
              <img src="./images/log1.png"/>
              <img src="./images/log2.png"/>
              <img src="./images/log3.png"/>
              <img src="./images/log4.png"/>
              <img src="./images/log5.png"/>
              <img src="./images/log6.png"/>
            </div>
            <div className='flex gap-2 items-center'>
                <h4 className="whitespace-nowrap">Meet all customers</h4>
                <ArrowRight />
            </div>
         </div>

        </div>
    </div>
  )
}