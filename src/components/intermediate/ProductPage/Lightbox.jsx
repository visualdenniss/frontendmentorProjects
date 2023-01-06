import React from 'react'
import './Lightbox.css'

const Lightbox = ({showLightBox, closeLightBox, nextAndPrevImg, currentLightboxImg,product, handleLightbox  }) => {
    return (
        <section className={showLightBox ? "product-page-lightbox product-page-lightbox-display" : 'product-page-lightbox'}>
            <div className="product-page-lightbox-overlay" onClick={closeLightBox}></div>
            <section className="product-page-lightbox-gallery">
            <svg onClick={closeLightBox} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFF" fill-rule="evenodd"/></svg>
            <div className="product-page-main-img product-page-lightbox-main-img">
                <button className='product-page-lightbox-prev-btn' onClick={()=>nextAndPrevImg('prev')}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
                <img src={product.images.lightboxImgs[currentLightboxImg].img} alt="" />
                <button className='product-page-lightbox-next-btn' onClick={()=>nextAndPrevImg('next')}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
            </div>
            <ul className="product-page-thumbnails product-page-lightbox-thumbnails">
                {product.images.thumbnails.map((img, index)=> (
                <li className="product-page-thumbnail-img product-page-lightbox-thumbnail-img" id={`productPageLightboxThumbnail${index}`} key={index} onClick={()=>handleLightbox(index)}>
                    <img src={img} alt="" />
                </li>
                ))}
            </ul>
        </section>
        </section>
    )
}

export default Lightbox
