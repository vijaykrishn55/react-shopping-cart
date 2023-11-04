import React, { useState } from "react";

import { remove_from_cart,checkout } from "../redux/actions/cartAction";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./cart.css"

import { useDispatch } from "react-redux";




const Cart=()=>
{
  const arr = useSelector(state=>state.cart);
  const [msg,displayMsg]=useState(false)
  
  const dispatch=useDispatch();
 
  
  
  function check()
  {
   dispatch(checkout());
   displayMsg(true);
   
  
  } 
   



    

  let sum=0;
   return(
    <div>
      <nav>
        <h4>Shopping Cart</h4>
        <div className="nav-items">
          <Link to="/">Home Page</Link>
          <Link to="/cart">Cart Page</Link>
        </div>
      </nav>
      
      <div className="cart">
        
        <div className="cart-items">
        {arr && arr.map((item,key)=>
        {
            return(
                
                <div className="cart-item" key={key}>
                <img src={item.thumbnail} alt="item"></img>
                <div className="cart-details">
                  <p>Title : {item.title}</p>
                  <p>Price : {item.price}</p>
                  <button className="cart-btn" onClick={()=>dispatch(remove_from_cart(item.title))}>Remove from cart</button>
                </div>
              </div>
              


            )
        })}
        </div>
        <div className="checkout-list">
          <h3>CHECKOUT-LIST</h3>
          {msg && <h3 style={{color:"tomato", textAlign:"center" }}>Checkout Successfull</h3>}
      
          <div className="product-prices">
            {
              arr.map((item,key)=>
              {
                sum+=item.price;
               return(
                <div className="list-item">
                <div style={{display:"flex"}}>

                  <p>{key+1}. </p>
            
                  <p> {item.title}</p>
               </div>
               <div>
               <p>${item.price}</p>
               </div>
               
               </div>
              
               )
              })
            }

          </div>
          <div className="checkout">
           <div className="total">
            <h4>Total</h4>
            <p>${sum}</p>
           </div>
           <button onClick={()=>check()} style={{cursor:"pointer"}}>Click to Checkout</button>
          </div>

        </div>
      </div>
      </div>
    )
  

}
export default Cart;