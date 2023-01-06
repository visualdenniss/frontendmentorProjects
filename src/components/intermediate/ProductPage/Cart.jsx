import React from 'react'
import './Cart.css'
import deleteIcon from './assets/ecommerce-product-page-main/images/icon-delete.svg'
import {product} from './data.js'

const Cart = ({cartItems, setCartItems, setShowCart}) => {
    return (
                <div className="product-page-cart-container">
                    <h5 className="product-page-cart-title">Cart</h5>
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
