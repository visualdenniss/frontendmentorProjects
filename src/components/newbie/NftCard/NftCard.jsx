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
            <div data-aos="fade-in" data-aos-delay="250" data-aos-duration="500" className="nftCard-cardItem">
                <div className="nftCard-img-container">
                <img className="nftCard-nft-img" src={eq} alt=""/>
                <div className="nftCard-view-icon-container">
                <img className="nftCard-view-icon" src={view} alt=""/>
                </div>
                </div>

                <div className="nftCard-content">
                <div className="nftCard-title">Equilibrium #3429</div>
                <p className="nftCard-p">Our Equilibrium collection promotes balance and calm.</p>
                <div className="nftCard-desc">
                    <div className="nftCard-price">
                            <img className="nftCard-icon" src={eth} alt=""/>
                        0.041 ETH
                    </div>
                    <div className="nftCard-countdown">
                            <img className="nftCard-icon" src={clock} alt=""/>
                         3 days left
                    </div>
                </div>
                <div className="nftCard-line"></div>
                <div className="nftCard-info">
                    <img className='nftCard-avatar' src={avatar} alt=""/>
                    <p className="nftCard-p">Creation of <span className="nftCard-span">Jules Wyvern</span></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NftCard
