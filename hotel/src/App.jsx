import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CallPage from './Call-component-page/call-page'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CallPage/>
      
    </>
  )
}

export default App
