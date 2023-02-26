import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Pages/Home'
import SignIn from '../Components/Login/SignIn'
import Admin from './Admin'
import Cart from './Cart'
import Edit from './Edit'
import PaymentPage from './PaymentPage'
import Product from './Product'
import SingleProduct from './SingleProduct'

const MainRoutes = () => {
  return <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/product/:id/edit' element={<Edit/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path={'/product/:id'} element={<SingleProduct/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='*' element={<h2>404 Page Not Found!</h2>}/>
      <Route path='/buynow' element={<PaymentPage/>}/>
    </Routes>
}

export default MainRoutes;
