import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';


const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] =useState('home');
    const {getTotalCartAmount, token, setToken,url}=useContext(StoreContext);
    const navigate = useNavigate();
    
    const [identity, setIdentity] = useState({
      username: "",
      email: ""
    })

    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }
    const getuser = async()=>{
      try{
      const response = await axios.post(url+'/api/user/getuser',{},{headers:{token}});
      if(response.data.success){
        // console.log(response.data);
        
        setIdentity({
          username: response.data.username,
          email: response.data.email
        })
      }
    }catch(error){
      console.log(error);
      
    }
    }
    useEffect(()=>{
      getuser();
    },[])
    
   
  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="" className="logo"/></Link>
        <ul className='navbar-menu'>
            <Link to="/" onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <div className="navbar-search-icon">
               <Link to="/cart"> <img src={assets.basket_icon} alt="" /> </Link>
                <div className={getTotalCartAmount()===0? " ":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)} >sign in</button>
            : <div className='navbar-profile'>
               <img onClick={()=>getuser()} src={assets.profile_icon} alt="" />
               {/* <li><p>{identity.username}</p></li>
                <li><p>{identity.email}</p></li> */}
               
               <ul className="navbar-profile-dropdown"> 
                <li><p>{identity.username}</p></li>
                <li><p>{identity.email}</p></li>
                <li onClick={()=>navigate('/myOrder')}> <img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img  src={assets.logout_icon} alt="" /><p>Logout</p></li>
               </ul>
            </div>
            
            }
        </div>
    </div>
  )
}

export default Navbar