import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../lib/client'
const Products = ({product}) => {
    
    const {details, image, name, price, slug} = product
  return (
    <div className='product-card'>
        <Link href={`/product/`}>
           <div>
               <img src={urlFor(image[0])} className='product-image'></img>
               <p className='product-name'>{name}</p>
               <h4 className='product-price'>${price}</h4>
           </div>
        </Link>
    </div>
  )
}

export default Products
