import React,{useState} from 'react'
import { Routes, Route,useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CarDetail from './pages/CarDetail'
import Cars from './pages/Cars'
import Home from './pages/Home'
import MyBooking from './pages/MyBooking'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/owner/Login'


const App = () => {
  const [showLogin, setShowLogin]= useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
    { showLogin && <Login setShowLogin={setShowLogin}/>}
    
      {!isOwnerPath &&< Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetail/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
        <Route path='/owner' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='add-car' element={<AddCar/>}/>
        <Route path='manage-cars' element={<ManageCars/>}/>
        <Route path='manage-bookings' element={<ManageBookings/>}/>

        </Route>
      </Routes>

      {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App