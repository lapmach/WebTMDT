import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from './Screens/Home/Home'
import CommonPage from './Screens/CommonPage/CommonPage'
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommonPage/>}>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
