import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Pages/Home'
import SignIn from '../Components/Login/SignIn'
import SignUp from '../Components/Login/Signup'
import Admin from './Admin'
import AdminProduct from './AdminProduct'
import Cart from './Cart'
import Edit from './Edit'
import PaymentPage from './PaymentPage'
import Product from './Product'
import SingleProduct from './SingleProduct'

const MainRoutes = () => {
  return <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/adminpage' element={<Admin/>}/>
      <Route path='/admin' element={<AdminProduct/>}/>
      <Route path='/product/:id/edit' element={<Edit/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path={'/product/:id'} element={<SingleProduct/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='*' element={<h2>404 Page Not Found!</h2>}/>
      <Route path='/buynow' element={<PaymentPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
}

export default MainRoutes;
