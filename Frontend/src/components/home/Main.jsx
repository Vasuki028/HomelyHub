import React from 'react'
import Header from './Header'
import PropertyList from './PropertyList'
import FilterModal from './FilterModal'
import Footer from './Footer'
import {Outlet} from "react-router-dom"

const Main = () => {
  return (
    <div>
      
      <Header/>
      <Outlet/>
      {/* <PropertyList/> */}
      <Footer/>
    </div>
  )
}

export default Main
