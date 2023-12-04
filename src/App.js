import React from 'react'
import SideNav from './Components/SideNav'
import Home from './Components/pages/Home'
import Hamkorlar from './Components/pages/Hamkorlar'
import Setting from './Components/pages/Setting'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Hamkorlar />}/>
        <Route path='/settings' element={<Setting />}/>
      </Routes>
    </BrowserRouter>
  )
}
