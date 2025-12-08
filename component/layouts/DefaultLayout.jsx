import React from 'react'
import { Header } from './Header'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>

        {/*main page*/}
        <main className="main">
            {children}
        </main>

        <Footer/>



    </div>
  )
}

export default DefaultLayout