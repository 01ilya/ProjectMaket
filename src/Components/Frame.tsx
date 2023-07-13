import React from 'react'


export default function Frame() {
  return (
    <div className='flex justify-center flex-col items-centr gap-8 p-8'>
        <div className='flex justify-center items-center'>
          <h1 className='text-center text-neutral-black w-[887px]'>Pellentesque suscipit fringilla libero eu.</h1>
        </div>
        <div className='flex justify-center py-10'>
            <button className='flex p-4 justify-center items-center gap-2 bg-brand-primary rounded'>
              <div className='text-neutral-white text-center Body-Medium-Body-2 '>Get a Demo</div>
              <img src="./images/Right.svg" />
            </button>
        </div>
    </div>
  )
}
