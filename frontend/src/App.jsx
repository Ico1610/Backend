import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CompShowCurri from './curriculum/ShowCurri.jsx'
import CompCreateCurri from './curriculum/CreateCurri.jsx'
import CompEditCurri from './curriculum/EditCurri.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowCurri from './curriculum/ViewCurri.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CompShowCurri/>}/>
      <Route path='/create' element={<CompCreateCurri/>}/>
      <Route path='/edit/:id' element={<CompEditCurri/>}/>
      <Route path='/view/:id' element={<ShowCurri/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
