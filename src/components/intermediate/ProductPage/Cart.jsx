import React from 'react'
import './Cart.css'
import deleteIcon from './assets/ecommerce-product-page-main/images/icon-delete.svg'
import {product} from './data.js'


const Cart = ({cartItems, setCartItems, setShowCart}) => {
    return (
                <div className="product-page-cart-container">
                    <div className="product-page-cart-top">  
                    <h5 className="product-page-cart-title">Cart
                    </h5>
                    <button onClick={()=>setShowCart(false)}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
                    </button>
                    </div>
                        {
                            cartItems === '' ? 
          
                            <p className="product-page-empty-cart">
                             Your cart is empty
                             </p>
                             : 
                        
                        <div className="product-page-cart-content">
                            {
                               cartItems.map((item)=>(
                        <div className="product-page-cart-item">
                            <img src={item?.thumbnail} alt="" className="product-page-cart-item-img" />
                            <div className="product-page-cart-item-details">
                                <div className="product-page-cart-item-title">{item?.title}</div>
                                <div className="product-page-cart-item-price">
                                    $125.00 x {item?.amount} <span>${item?.amount * 125}.00</span>
                                </div>
                            </div>
                            <button className="product-page-cart-remove-item-btn">
                                <img src={deleteIcon} alt="" onClick={()=>setCartItems('')} />
                            </button>
                        </div>
                               ))
                            }
                        <button className="product-page-cart-checkout-btn" onClick={()=>setShowCart(false)}>
                           Checkout
                        </button>
                        </div>
                    }
                </div>
    )
}

export default Cart
