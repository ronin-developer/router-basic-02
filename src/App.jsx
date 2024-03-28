import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import axios from 'axios'

// dev mode
axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  return (
    <div>
      <Navbar />
      {/* outlet showing children */}
      <Outlet /> 
    </div>
  )
}

export default App