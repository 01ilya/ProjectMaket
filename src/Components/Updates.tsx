import React from 'react'
import Right from '../assets/Right'
import classNames from 'classnames';

export default function Updates() {
  const Array = [{text:'Creating Streamlined Safeguarding Processes with OneRen', img: 'background-1', }, {text:'What are your safeguarding responsibilities and how can you manage them?', img: 'background-2',}, {text:'Revamping the Membership Model with Triathlon Australia', img: 'background-3',} ];
  
    

  
  return (

  

    <div className='flex flex-col items-center gap-4 pt-10'>
      
      <div className='flex flex-col items-center gap-2 '>
        <h2 className='text-neutral-d-grey text-center'>Caring is the new marketing</h2>
        <div className='Body-Regular-Body-2 text-neutral-grey text-center w-[628px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</div>
      </div>


      <div className='flex justify-between items-centr  h-[366px] gap-4'>

       {Array.map(({text, img}:any) => {
        return (

          <div className='flex flex-col items-center  '>
             <div className={ `bg-cover w-[368px] h-[286px] bg-no-repeat rounded-lg  -mb-[96px] ${img}`}/> 
             <div className='flex  flex-col items-center  rounded-lg bg-neutral-silver gap-4'>
              <h4 className='text-center text-neutral-grey w-[285px] h-[84px] pt-4 px-4'>{text}</h4>
              <div className='flex p-2 justify-center items-center self-stretch'>
                <h4 className='text-center text-brand-primary pt-6 mb-6'>Readmore</h4>
                <div className='w-6 h-6 '><Right /></div>
              </div>
             </div>
         </div>

        )
       } )}
      </div>
    </div>

  )
}
