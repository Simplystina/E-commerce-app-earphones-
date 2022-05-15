import React from 'react'
import { HeroBanner , Products } from '../components'

import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner data={bannerData}/>
      <div className='product-container'>
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
        <div className='product-content'>
          {products?.map((product)=> <Products key={product._id} product={product}/>)}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () =>{
   const query = '*[_type == "product"]';
   const products = await client.fetch(query)

   const bannerQuery = '*[_type == "banner"]'
   const bannerData = await client.fetch(bannerQuery)

   return {
     props: { products, bannerData }
   }
}
export default Home
