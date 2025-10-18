import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toolbar from './components/toolbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='flex justify-center justify-between mx-auto mt-100 text-3xl'>
        Hello World
      </div> */}
      <Toolbar />
    </>
  ) 
}

export default App
