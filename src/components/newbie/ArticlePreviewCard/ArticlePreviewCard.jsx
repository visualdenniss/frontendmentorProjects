import React from 'react'
import './ArticlePreviewCard.css'
import drawers from '../ArticlePreviewCard/assets/article-preview-component-master 2/images/drawers.jpg'
import avatar from '../ArticlePreviewCard/assets/article-preview-component-master 2/images/avatar-michelle.jpg'
import fb from '../ArticlePreviewCard/assets/article-preview-component-master 2/images/icon-facebook.svg'
import pint from '../ArticlePreviewCard/assets/article-preview-component-master 2/images/icon-pinterest.svg'
import twitter from '../ArticlePreviewCard/assets/article-preview-component-master 2/images/icon-twitter.svg'



const ArticlePreviewCard = () => {


    const handleClick = () => {
        const links = document.querySelector('.articlePreviewCard-share-links')
        links.classList.toggle('articlePreviewCard-share-links-active')
        const cta = document.querySelector('.articlePreviewCard-share-cta')
        cta.classList.toggle('articlePreviewCard-share-cta-active')
    }

    return (
        <div className="articlePreviewCard df">
            <div className="articlePreviewCard-container"
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            >
                <div className="articlePreviewCard-img-container">
                    <img className="articlePreviewCard-img-hero" src={drawers} alt=""/>
                </div>
                <div className="articlePreviewCard-text-content">
                    <h1 className="articlePreviewCard-title">
                        Shift the overall look and feel by adding these wonderful touches to furniture in your home
                    </h1>
                    <p className="articlePreviewCard-desc">
                          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
                    </p>
                    <div className="articlePreviewCard-author">
                        <div className="articlePreviewCard-author-left">
                        <div className="articlePreviewCard-author-avatar">
                            <div className="articlePreviewCard-author-avatar-img-holder">
                                <img className="articlePreviewCard-author-avatar-img" src={avatar} alt=""/>
                            </div>
                        </div>
                        <div className="articlePreviewCard-author-info">
                            <div className="articlePreviewCard-author-name">
                                Michelle Appleton
                            </div>
                            <div className="articlePreviewCard-author-date">
                                28 Jun 2020
                            </div>
                        </div>
                        </div>
                        <div className="articlePreviewCard-share-section">
                            <div className="articlePreviewCard-share-links">
                                <div className="articlePreviewCard-share-links-text">
                                    SHARE
                                </div>
                                <div className="articlePreviewCard-share-links-icon">
                                    <img className="articlePreviewCard-share-links-fb" src={fb} alt=""/>
                                </div>
                                <div className="articlePreviewCard-share-links-icon">
                                    <img className="articlePreviewCard-share-links-twitter" src={twitter} alt=""/>
                                </div>
                                <div className="articlePreviewCard-share-links-icon">
                                    <img className="articlePreviewCard-share-links-pint" src={pint} alt=""/>
                                </div>
                                <div onClick={handleClick} className="articlePreviewCard-share-cta-mobile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                            </div>
                            </div>
                            <div onClick={handleClick} className="articlePreviewCard-share-cta">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePreviewCard
