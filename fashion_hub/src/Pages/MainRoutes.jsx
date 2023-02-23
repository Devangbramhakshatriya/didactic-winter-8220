import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Edit from './Edit'
import Product from './Product'
import SingleProduct from './SingleProduct'

const MainRoutes = () => {
  return <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/product/:id/edit' element={<Edit/>}/>
      <Route path={'/product/:id'} element={<SingleProduct/>}/>
      <Route path='*' element={<h2>404 Page Not Found!</h2>}/>
    </Routes>
}

export default MainRoutes;
