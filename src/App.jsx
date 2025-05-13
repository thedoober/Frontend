import React,{Suspense, useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'
import Loader from './components/Loader/Loader'


const App = () => {
  const [showLogin,setShowLogin]= useState(false);
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myOrder' element={<MyOrders/>}/>
        
      </Routes>
      </Suspense>
    </div>
    <Footer/>
    </>
  )
}

export default App