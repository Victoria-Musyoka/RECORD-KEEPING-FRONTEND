import React from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Stocks from './pages/Stocks';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL='https://record-vic-mine.herokuapp.com'


function App() {
  const [stocks,setStocks]= useState([]);
  
 useEffect(()=>{
  fetch(`${URL}/stocks`)
  .then(resp=>resp.json())
  .then(data=>setStocks(data));


 },[]
 );
 
 const onAddStock =(addNewStock)=>{
  setStocks([addNewStock, ...stocks]);
 }
 const handleDeleteStock=(id)=>{
 const updateStock =stocks.filter((stock)=>stock.id !== id ) 
 setStocks(updateStock)

 }

  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks stocks={stocks} onAddStock={onAddStock} onDeleteStock={handleDeleteStock}/>} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default App