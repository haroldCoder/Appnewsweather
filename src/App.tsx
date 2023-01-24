import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Record from './components/Record'

function App() : JSX.Element{
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/record' element={<Record/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
