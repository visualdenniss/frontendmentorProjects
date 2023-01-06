import React, {useState, useEffect} from 'react'
import './Product.css'
import cart from './assets/ecommerce-product-page-main/images/icon-cart.svg'
import {product} from './data.js'
import Lightbox from './Lightbox'

const Product = ({amount, setAmount, cartItems, setCartItems}) => {

    const [showLightBox, setShowLightBox] = useState(false)
    const [sliderImgIndex, setSliderImgIndex] = useState(0)
    const [currentLightboxImg, setCurrentLightboxImg] = useState(0)

    // ADD TO CART

    const addToCart = (productItem, amount) => {
      if (amount === 0) return
      const newItem = {
          thumbnail: productItem.images.mainImg,
          title: productItem.title,
          price: productItem.currentPrice,
          amount: amount, 
      }
      if(cartItems === '') {
          setCartItems([...cartItems, newItem])
      }
    }

    // HANDLE LIGHTBOX 

    const handleLightbox = (index) => {
        setCurrentLightboxImg(index)
    }

    const openLightBox = (index) => {
        setShowLightBox(true)
        handleLightbox(index)
    }

    const closeLightBox = () => {
        setShowLightBox(false)
        setTimeout(()=>{
            setCurrentLightboxImg(0)
        }, 200)
    }
    
    useEffect(()=> {

       // RESET SELECTED THUMBNAILS 
       document.querySelectorAll('.product-page-thumbnail-img').forEach((item)=>{
           if(item.classList.contains('product-page-thumbnail-img-selected')) {
               item.classList.remove('product-page-thumbnail-img-selected')
           }
       })
      //ADD STYLE TO SELECTED THUMBNAILS 
      const selectedThumbnail = document.getElementById(`productPageThumbnail${currentLightboxImg}`)
      selectedThumbnail.classList.add('product-page-thumbnail-img-selected')

      if(showLightBox) {
          // RESET SELECTED LIGHTBOX THUMBNAILS 
          document.querySelectorAll('.product-page-lightbox-thumbnail-img').forEach((item)=>{
            if(item.classList.contains('product-page-lightbox-thumbnail-img-selected')) {
                item.classList.remove('product-page-lightbox-thumbnail-img-selected')
            }
        })
          //ADD STYLE TO SELECTED LIGHTBOX THUMBNAILS 
          const selectedLightBoxThumbnail = document.getElementById(`productPageLightboxThumbnail${currentLightboxImg}`)
          selectedLightBoxThumbnail.classList.add('product-page-lightbox-thumbnail-img-selected')
      }

    }, [currentLightboxImg])

    // SLIDER 

    const nextAndPrevImg = (direction) => {
        if(direction === 'prev') {
         currentLightboxImg < 1 ? setCurrentLightboxImg(3) : setCurrentLightboxImg(prev => prev - 1)
        }
        else {
         currentLightboxImg === 3 ? setCurrentLightboxImg(0) : setCurrentLightboxImg(prev => prev + 1)
        }
     }
 
     const SlideImg = (direction) => {
 
         const container = document.querySelector('.product-page-slider-container')
         if(direction === 'next') {
             if(sliderImgIndex === 3) {
                 setSliderImgIndex(prev => prev - 3)
                 container.style.transform = `translateX(-${(0) * 100}vw)`
             } else {
                 setSliderImgIndex(prev => prev + 1)
                 container.style.transform = `translateX(-${(sliderImgIndex + 1) * 100}vw)`
             }
         }
         else {
             if(sliderImgIndex === 0) {
                 setSliderImgIndex(prev => prev + 3)
                 container.style.transform = `translateX(-300vw)`
             } 
             else {
                 setSliderImgIndex(prev => prev - 1)
                 container.style.transform = `translateX(-${(sliderImgIndex - 1) * 100}vw)`
             }
         }
     }
 
 

    return (
        <main className='product-page-main'>
            <section className="product-page-gallery">
            <div className="product-page-main-img">
                <img src={product.images.mainImg} alt="" />
            </div>
            <ul className="product-page-thumbnails">
                {product.images.thumbnails.map((img, index)=> (
                <li className="product-page-thumbnail-img" key={index} id={`productPageThumbnail${index}`}
                onClick={()=> openLightBox(index)}
                >
                    <img src={img} alt=""/>
                </li>
                ))}
            </ul>
            <div className="product-page-slider-container">
                {product.images.sliderImgs.map((item)=>(
                            <div className="product-page-slider-img">
                                <img src={item.img} alt="" />
                            </div>
                ))}
            </div>
            {
                
            }
            <button className='product-page-mobile-prev-btn' onClick={()=>SlideImg('prev')}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
            <button className='product-page-mobile-next-btn' onClick={()=>SlideImg('next')}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
            </section>
            <section className="product-page-right">
            <div className="section-product-page-info">
                <span className="section-product-page-company">
                    {product.company}
                </span>
                <h1 className="section-product-page-title">
                {product.title}
                </h1>
                <p className="section-product-page-desc">
                {product.desc}
                </p>
                <div className="product-page-price">
                    <p className="product-page-actual-price">
                        ${product.currentPrice}.00
                        <span>{product.discountRate}%</span>
                    </p>
                    <p className="product-page-old-price">
                        ${product.oldPrice}.00
                    </p>
                </div>
            </div>
            <div className="product-page-cart-btns">
                <div className="product-page-product-counter">
                    <button className="product-page-decrease" onClick={()=>amount > 0 && setAmount(prev=>prev-1)}>-</button>
                    <p className="product-page-count">{amount}</p>
                    <button className="product-page-increase" onClick={()=>setAmount(prev=>prev+1)}>+</button>
                </div>
                <button className="product-page-add-to-cart-btn" onClick={()=>addToCart(product,amount)}>
                    <img src={cart} alt="" />
                    Add to Cart
                </button>
            </div>
            </section>
            <Lightbox showLightBox={showLightBox} closeLightBox={closeLightBox} nextAndPrevImg={nextAndPrevImg}currentLightboxImg={currentLightboxImg} product={product}
            handleLightbox={handleLightbox}/>
        </main>
    )
}

export default Product
