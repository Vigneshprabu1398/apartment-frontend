import { useState } from 'react'
import './App.css'
import { Routers } from './components/Routers/Routers'
import {Navbar} from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Navbar />
      <Routers />
    </div>
  )
}

export default App
