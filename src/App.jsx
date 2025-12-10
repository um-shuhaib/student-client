import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./componets/home"
import {Routes,Route} from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='header' element={<Header/>} /> */}
      </Routes>
    <Footer/>
    </>
  )
}

export default App
