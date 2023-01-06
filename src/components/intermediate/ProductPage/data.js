import product1 from './assets/ecommerce-product-page-main/images/image-product-1.jpg'
import product2 from './assets/ecommerce-product-page-main/images/image-product-2.jpg'
import product3 from './assets/ecommerce-product-page-main/images/image-product-3.jpg'
import product4 from './assets/ecommerce-product-page-main/images/image-product-4.jpg'


import product2Slider from './assets/ecommerce-product-page-main/images/image-product-2-slider.jpg'
import product3Slider from './assets/ecommerce-product-page-main/images/image-product-3-slider.jpg'
import product4Slider from './assets/ecommerce-product-page-main/images/image-product-4-slider.jpg'


import product1Thumbnail from './assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg'
import product2Thumbnail from './assets/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg'
import product3Thumbnail from './assets/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg'
import product4Thumbnail from './assets/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg'


export const product = {
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    currentPrice: 125.00,
    discountRate: 50,
    oldPrice: 250.00,
    images: {
        mainImg: product1,
        thumbnails: [
            product1Thumbnail, 
            product2Thumbnail, 
            product3Thumbnail, 
            product4Thumbnail, 
        ],
        lightboxImgs: [
            {
                id: 'sneaker1',
                img: product1, 
            },
            {
                id: 'sneaker2',
                img: product2, 
            },
            {
                id: 'sneaker3',
                img: product3, 
            },
            {
                id: 'sneaker4',
                img: product4, 
            },
        ], 
        sliderImgs: [
            {
                id: 'sneaker1',
                img: product1, 
            },
            {
                id: 'sneaker2',
                img: product2Slider, 
            },
            {
                id: 'sneaker3',
                img: product3Slider, 
            },
            {
                id: 'sneaker4',
                img: product4Slider, 
            },
        ], 
    }
}