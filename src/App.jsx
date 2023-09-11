import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Lister from './pages/Lister'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<HomePage/>} path="/home"/>
        <Route element={<NotFound/>} path='*'/>
        <Route element={<Lister/>} path='/lister'/>
      </Routes>
    </Router>


      // <HomePage/>
    
  )
}

export default App
