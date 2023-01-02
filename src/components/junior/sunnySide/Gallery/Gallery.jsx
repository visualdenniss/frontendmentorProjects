import React from 'react'
import './Gallery.css'

const Gallery = ({galleryDesktop, galleryMobile}) => {
    return (
        <section className='sunnySide-gallery'>
            {galleryDesktop.map((item)=>
            <img src={item} alt="" />
            )}
        </section >
    )
}

export default Gallery
