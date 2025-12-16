import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./componets/home"
import { Routes, Route } from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'
import AddStudent from './componets/AddStudent'
import EditStudent from './componets/EditStudent'
import { ToastContainer,Bounce,Flip } from 'react-toastify'
import './bootstrap.min.css'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add' element={<AddStudent />} />
        <Route path='edit/:id' element={<EditStudent />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  )
}

export default App
