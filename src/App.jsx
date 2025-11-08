import React,{useState} from 'react'
import { Routes, Route,useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CarDetail from './pages/CarDetail'
import Cars from './pages/Cars'
import Home from './pages/Home'
import MyBooking from './pages/MyBooking'

const App = () => {
  const [showLogin, setShowLogin]= useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath &&< Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetail/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
      </Routes>

      {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App