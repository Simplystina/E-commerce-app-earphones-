import React from 'react'
import Head from 'next/head'

import {Footer} from '../index'
const Layout = ({children}) => {
  return (
    <div>
        <Head>
          <title>E-commerce 4 earphones</title>
        </Head>
        <header>
        </header>
        <main className='main-container'>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout
