import React from 'react'
import Header from '../components/Header'
import Promo from '../components/Promo'
import Footer from '../components/Footer'


const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>           
            <Promo/>  
            
            <main>
           
            {children}
           
            
            </main>

            <Footer/>

        </div>
	)
}

export default Layout