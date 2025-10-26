import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  const [showLogin, setShowLogin]= useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <div>
      {!isOwnerPath &&< Navbar setShowLogin={setShowLogin}/>}
    </div>
  )
}

export default App