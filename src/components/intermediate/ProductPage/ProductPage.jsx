import React, {useState} from 'react'
import Nav from './Nav'
import Product from './Product'
import './ProductPage.css'

const ProductPage = () => {

    const [amount, setAmount] = useState(0)
    const [cartItems, setCartItems] = useState('')

    return (
        <div className='product-page'>
            <Nav amount={amount} cartItems={cartItems} setCartItems={setCartItems}></Nav>
            <Product amount={amount} setAmount={setAmount} setCartItems={setCartItems} cartItems={cartItems}></Product>
        </div>
    )
}

export default ProductPage
