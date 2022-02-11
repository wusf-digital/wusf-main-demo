import * as React from "react"


import Navbar from './navbar'
import Header from './header'
import Footer from './footer'
import FooterLinks from './footer-links'
import Ads from './ad'

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      {children}
      <Ads />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default Layout