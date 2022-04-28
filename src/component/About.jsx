import React from 'react'
import imageAbout from "../image/imageAbout.jpg"

export default function About() {
  return (
    <div className='container mt-5'>
       <img src={imageAbout} alt="image" height="300px" width="100%"/>
       <h1 className='text-center text-capitalize font-weight-bold mt-4 display-3' >About us</h1>
       <p className='h5 mt-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel 
         sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius 
         sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo 
         autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, 
         eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt 
         ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium 
         molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias 
         error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum 
         voluptates a cumque velit</p>
    </div>
  )
}
