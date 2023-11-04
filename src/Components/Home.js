import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../redux/actions/fetchAction";
import { add_to_cart } from "../redux/actions/cartAction";


const Home = () => {
  const { loader, data, error } = useSelector((state) => state.fetch);
  const arr = useSelector(state=>state.cart);
 
  
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(fetchStart());
    async function getData() {
      try {
        const product = await axios.get("https://dummyjson.com/products");
        dispatch(fetchSuccess(product.data.products));
        
      } catch (err) {
        dispatch(fetchFailure(err.message));
      }
    }
    getData();
  }, []);


function addItems(item)
{
  
  dispatch(add_to_cart(item))
  
 
  
}

  return (
    <div className="main-container">
      <nav>
        <h4>Shopping Cart</h4>
        <div className="nav-items">
          <Link>Home Page</Link>
          <Link to="/cart">Cart Page</Link>
        </div>
      </nav>
      <h2 className="all">All Items</h2>
      <div className="items">
        {data &&
          data.map((item,key) => {
            return (
              <div className="item" key={key}>
                <img src={item.thumbnail} alt="item"></img>
                <div className="details">
                  <p>Title : {item.title}</p>
                  <p>Price : {item.price}</p>
                  <button className="cart-btn" onClick={()=>addItems(item)}>Add to cart</button>
                </div>
              </div>
            );
          })}
      </div>

    
    </div>
  );
};

export default Home;
