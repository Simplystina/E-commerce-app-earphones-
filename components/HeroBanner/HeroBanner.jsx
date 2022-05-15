import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../lib/client'

const HeroBanner = ({data}) => {
    
    const {buttonText, desc, discount,
     largeText1, largeText2, midText, product,
     saleTime, smallText, image } = data[0]
  return (
    <div className='herobanner-container'>
        <div className='herobanner-content'>
            <p>{smallText}</p>
            <h4>{midText}</h4>
            <h1>{largeText1}</h1>
             <div className='herobanner-image-container'>
                <img src={urlFor(image)} className='herobanner-image'></img>
            </div>
            <Link href={`/product/`}>
                <button className='herobanner-btn'>{buttonText}</button>
            </Link>
        </div>
        <div className='herobanner-desc'>
            <div>
              <h5>Description</h5>
               <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner

