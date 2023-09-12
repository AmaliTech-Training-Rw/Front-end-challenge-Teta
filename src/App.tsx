import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Lister from './pages/Lister'
import Details from './pages/details'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<NotFound/>} path='*'/>
        <Route element={<Lister/>} path='/lister'/>
        <Route element={<Details/>} path={`/details/:name`}/>
      </Routes>
    </Router>


      // <HomePage/>
    
  )
}

export default App
