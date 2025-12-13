import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./componets/home"
import {Routes,Route} from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'
import AddStudent from './componets/AddStudent'
import EditStudent from './componets/EditStudent'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='add' element={<AddStudent/>} />
        <Route path='edit' element={<EditStudent/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
