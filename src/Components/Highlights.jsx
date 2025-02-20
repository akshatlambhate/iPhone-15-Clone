import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
 
  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      y:0,

    })
    gsap.to('.link',{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25

    })

  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
       <div className='mb-12 w-full md:flex items-end justify-between'>
        <h1 className='section-heading' id='title'>
          Get the Highlights
        </h1>
         <div className='flex items-end gap-5'>
           <p className='link'> Watch the Film
           <img src={watchImg} alt="Watch" className='ml-2' />
           </p>
           <p className='link'> Watch the Event
           <img src={rightImg} alt="Watch" className='ml-2' />
           </p>
          
         </div>
       </div>
       <VideoCarousel />
    </section>
  )
}

export default Highlights