import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Header.css'
const Header = () => {
  const navigate = useNavigate();
  return (
    
    <div className='header'>
    <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delected array of dishes crafted with the finest ingredients and culinary expertise
            Our misson is to satisfy your craving and elevate 
            your dining experience. One delicious meal at a time.
             </p>
             <button >View menu</button>
    </div>
    </div>
  )
}

export default Header