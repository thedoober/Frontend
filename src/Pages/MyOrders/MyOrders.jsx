import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import axios from 'axios';
import './MyOrders.css'


const MyOrders = () => {
  const {url,token} = useContext(StoreContext);
  const [data, setData] = useState([]);
  const fetchOrders= async()=>{
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data);
    // console.log(data);
    
    // console.log(response.data.data);
  }
  const cancelOrder = async(orderId)=>{
    try{
      console.log(orderId,"Hello");
      
      const response= await axios.post(url+'/api/order/cancel',{orderId: orderId})

      // console.log(response.data.success);
      // console.log(response.data.message);
      // console.log(response);
      
      if(response.data.success){
      alert(response.data.message)
      fetchOrders();}
      
      else{
        alert("wrong order id")
      }

    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    if(token){
      fetchOrders();
      
    }
  },[token],[])
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {
          data.map((order,index)=>{
            return(
              <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="" />
            <p>{order.items.map((item,index)=>{
              if(index === order.items.length-1){
                return  item.name+ " X "+item.quantity
              }
              else{
                return item.name+" X "+item.quantity
              }
            })}</p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p><span>&#x25cf;</span><b>{order.status}</b></p>
            <button onClick={fetchOrders}>Track Order</button>
            <button onClick={()=>cancelOrder(order._id)}>cancelOrder</button>
              </div>
            )
          })
        }
      </div>
      </div>
  )
}

export default MyOrders