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
import ProductsList from './Screens/ProductsList/ProductsList'
import NotFound from './Screens/NotFound/NotFound'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetail from './Screens/ProductDetail/ProductDetail'
import Payment from './Screens/Payment/Payment'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommonPage/>}>
              <Route path='/home' element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>
                }></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/categories/:id' element={<ProductsList/>}></Route>
              <Route path='/products/:id' element={<ProductDetail/>}></Route>
             
              <Route path='*' element={<NotFound/>}></Route>
          </Route>
           <Route path='/payment' element={<Payment/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
