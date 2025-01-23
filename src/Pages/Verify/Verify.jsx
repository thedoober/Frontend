import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
 import React, { useContext, useEffect } from 'react'
 import './Verify.css'
 
 const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} =useContext(StoreContext)
    // console.log(success,orderId);
    const navigate = useNavigate()
    const verifyPayment = async()=>{
        const response = await axios.post(url+'/api/order/verify',{success, orderId})
        if(response.data.success){
            navigate('/myOrder')
        }
        else{
          console.log(response.data.success)
            navigate("/");
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
   return (
     <div className="verify">
      <div className="spinner"></div>
      </div>
   )
 }
 
 export default Verify