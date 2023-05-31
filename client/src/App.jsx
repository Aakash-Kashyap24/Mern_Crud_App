import React, { useEffect, useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Form from './pages/Form';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllData } from './actions/ProductAction';

function App() {
  const dispatch=useDispatch();
const {error}=useSelector((state)=>state.Data)
useEffect(() => {
if (error) {
  dispatch(clearErrors());
}
dispatch(getAllData());

}, [dispatch])
  return (
    <>
      <div className="app ">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-new-data' element={<Form />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
