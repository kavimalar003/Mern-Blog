import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignOn from './pages/SignOn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Header from './components/Header'
import FooterCom from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignOn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/projects' element ={<Project/>}/>
      </Routes>
      <FooterCom/>
    </BrowserRouter>
  )
}

export default App
