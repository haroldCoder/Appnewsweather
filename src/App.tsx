import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './controllers/Navbar'
import Home from './controllers/Home'

function App() : JSX.Element{
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
