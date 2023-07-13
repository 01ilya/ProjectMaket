import React from 'react'
import ArrowRight from "../assets/ArrowRight"

export default function Customers() {
  return (
    <div className='flex gap-10 px-36 py-8 bg-silver'>
          <img src="./images/image.png" width={326} height={326} className='h-full' />

        <div >
         <div className='text-neutral-grey Body-Medium-Body-2'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</div>
         <h4 className='pt-4 text-primary text-brand-primary'>Tim Smith</h4>
         <div className='pt-2 Body-Regular-Body-2 text-neutral-l-grey'>British Dragon Boat Racing Association</div>

         <div className='flex gap-8 pt-8 '>
            <div className='flex gap-10 h-12 items-center'>
              <img src="./images/Log1.svg"/>
              <img src="./images/Log2.svg"/>
              <img src="./images/Log3.svg"/>
              <img src="./images/Log4.svg"/>
              <img src="./images/Log5.svg"/>
              <img src="./images/Log6.svg"/>
            </div>
            <div className='flex gap-2 items-center'>
                <h4 className="whitespace-nowrap text-brand-primary">Meet all customers</h4>
                <ArrowRight />
            </div>
         </div>

        </div>
    </div>
  )
}