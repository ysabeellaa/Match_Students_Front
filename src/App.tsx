
import './App.css'
import './GlobalStyles/main.scss'
import Entry from './Pages/Entry/Entry'
import Home from './Pages/Home/Home'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/entry" element={<Entry />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
