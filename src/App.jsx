import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center justify-between mx-auto mt-100 text-3xl'>
        Hello World
      </div>
    </>
  )
}

export default App
