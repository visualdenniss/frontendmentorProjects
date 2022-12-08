import React from 'react'
import './FeaturedNews.css'

const FeaturedNews = ({topNews}) => {

    return (
        <ul className="newsHome-featured">
            {topNews.map((news,index)=>(
                <li className="newsHome-featured-news-container">
                    <div className="newsHome-featured-news-img-holder">
                        <img className="newsHome-featured-news-img"  src={news.img} alt=""/>
                    </div>
                    <div className="newsHome-featured-news-text-content">
                        <span className="newsHome-featured-news-rank">
                            {news.rank}
                        </span>
                        <h3 className="newsHome-featured-news-title">
                            {news.title}
                        </h3>
                        <p className="newsHome-featured-news-desc">
                            {news.description}
                        </p>
                    </div>
                </li>
            ))
            }
        </ul>
    )
}

export default FeaturedNews
