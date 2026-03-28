import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Event1 from './component/Event page/event1'
import Event2 from './component/Event page/event2'
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Event1 />
      <Event2 />
    <Routes>
      <Route path="/event" element={<Event1 />} />
    </Routes>
     
      </BrowserRouter>
    </>
  )
}

export default App
