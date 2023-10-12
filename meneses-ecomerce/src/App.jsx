import { useState } from 'react'
import NavBar from './components/NavBar/Navbar';
import ProductListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
    return (
    <>
      <NavBar/>
      <ProductListContainer/>
    </>
  )
}

export default App
