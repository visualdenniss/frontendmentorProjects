import React from 'react'
import './NftCard.css'
import eq from '../NftCard/assets/nft-preview-card-component-main/images/image-equilibrium.jpg'
import eth from '../NftCard/assets/nft-preview-card-component-main/images/icon-ethereum.svg'
import clock from '../NftCard/assets/nft-preview-card-component-main/images/icon-clock.svg'
import avatar from '../NftCard/assets/nft-preview-card-component-main/images/image-avatar.png'
import view from '../NftCard/assets/nft-preview-card-component-main/images/icon-view.svg'

const NftCard = () => {
      
    return (
        <div className='nftCardBody df'>
            <div data-aos="fade-in" data-aos-delay="250" data-aos-duration="500" className="cardItem">
                <div className="img-container">
                <img className="nft-img" src={eq} alt=""/>
                <div className="view-icon-container">
                <img className="view-icon" src={view} alt=""/>
                </div>
                </div>

                <div className="content">
                <div className="title">Equilibrium #3429</div>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div className="desc">
                    <div className="price">
                            <img className="icon" src={eth} alt=""/>
                        0.041 ETH
                    </div>
                    <div className="countdown">
                            <img className="icon" src={clock} alt=""/>
                         3 days left
                    </div>
                </div>
                <div className="line"></div>
                <div className="info">
                    <img className='avatar' src={avatar} alt=""/>
                    <p>Creation of <span>Jules Wyvern</span></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NftCard
