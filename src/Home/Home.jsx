import React from 'react'
import './Home.css'
import left from './left.jpg'
import mobile3 from './mobile3.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="app-main-home">
                <i class="bi bi-list"></i>
            <div data-aos="fade-right"    
            data-aos-delay="200"
            data-aos-duration="1000" 
            className="app-main-left">
                <h1 className="app-main-title">
                    <span
                    data-aos="fade-right"  
                    className="app-main-title-front-span">FRONT</span>END</h1>
                <p className="app-main-home-desc">Compilation of <br/>
                    <span className="app-main-span"> frontendmentor.io </span> challenges <br/>
                </p>
                <p className="app-main-home-desc">coded by 
                    <span className="app-main-span"> visualDev</span>
                </p>
                <p className="app-main-home-contact">Need a web developer? 
                    <span className="app-main-span"> Hire me.</span>
                </p>
            </div>
                <div className="app-main-left-deco">01</div>
            <div data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000" 
            className="app-main-right">
                <div className="app-main-item">
                        <img className="app-main-item-img" src={left} alt=""/>
                        <div className="app-main-item-title">
                            Pages
                        </div>
                        <div className="app-main-item-desc">
                            Projects with multiple pages, single page applications, landing pages 
                            and more
                        </div>
                        <Link to='/pages'>
                        <button className="app-main-item-btn">Go to section <i class="bi bi-arrow-right"></i></button>
                        </Link>
                </div>
                <div data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000" 
                className="app-main-item">
                        <div className="app-main-item-title">
                            Components
                        </div>
                        <div className="app-main-item-desc">
                            Showcase of individual parts and components of websites
                        </div>
                        <Link to='/components'>
                        <button className="app-main-item-btn">Go to section
                         <i class="bi bi-arrow-right"></i> </button>
                        </Link>
                        <img className="app-main-item-img" src={mobile3} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Home
