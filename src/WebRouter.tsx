import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GuidePage from './Pages/GuidePage/GuidePage'
import MainPage from './Pages/MainPage/MainPage'
import FAQPage from './Pages/FAQPage/FAQPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import CompatibilityCheckerPage from './Pages/CompatibilityCheckerPage/CompatibilityCheckerPage'
import AboutPage from './Pages/AboutPage/AboutPage'

const WebRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Home' element={<MainPage />} />
        <Route path='/Guide' element={<GuidePage />}/>
        <Route path='/FAQ' element={<FAQPage />}/>
        <Route path='/Contact' element={<ContactPage />}/>
        <Route path='/Products' element={<ProductPage />}/>
        <Route path='/Compatibility_Checker' element={<CompatibilityCheckerPage />}/>
        <Route path='/About' element={<AboutPage />}/>
    </Routes>
  )
}

export default WebRouter;