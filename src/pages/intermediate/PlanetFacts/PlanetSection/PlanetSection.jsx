import React, {useState, useEffect} from 'react'
import './PlanetSection.css'
import { motion } from "framer-motion"

const PlanetSection = ({planet, location}) => {
     
     const [tabIndex, setTabIndex] = useState('planetOverview')
     const [planetContent, setPlanetContent] = useState(planet.overview.content)
     const [planetImg, setPlanetImg] = useState(planet.images.planet)

     useEffect(() => {
         const btns =  document.querySelectorAll('.planetFacts-tab-btn')
         btns.forEach(btn=> {
             if(btn.classList.contains('planetFacts-tab-btn-active'))
             {
                btn.classList.remove('planetFacts-tab-btn-active')
             }
         })
         document.querySelector(`#${tabIndex}`).classList.add('planetFacts-tab-btn-active')
     }, [tabIndex])

     const handleTabOverview = () => {
        setTabIndex('planetOverview')
        setPlanetContent(planet.overview.content)
        setPlanetImg(planet.images.planet)
     }
     const handleTabInternal = () => {
        setTabIndex('planetInternal')
        setPlanetContent(planet.structure.content)
        setPlanetImg(planet.images.internal)
     }
     const handleTabSurface = () => {
        setTabIndex('planetSurface')
        setPlanetContent(planet.geology.content)
        setPlanetImg(planet.images.planet)
     }

     const stats = [
         {
             name: 'ROTATION TIME', 
             stat: planet.rotation
         },
         {
             name: 'REVOLUTION TIME', 
             stat: planet.revolution
         },
         {
             name: 'RADIUS', 
             stat: planet.radius
         },
         {
             name: 'AVERAGE TEMP.', 
             stat: planet.temperature
         },
     ]

     useEffect(() => {
         setTabIndex('planetOverview')
         setPlanetContent(planet.overview.content)
         setPlanetImg(planet.images.planet)

        document.querySelector('.planetFacts-illustration-container').classList.add('planetFacts-planet-img-animation') 
        setTimeout(()=>{
            document.querySelector('.planetFacts-illustration-container').classList.remove('planetFacts-planet-img-animation')  
        },600)

        document.querySelector('.planetFacts-planet-description').classList.add('planetFacts-planet-desc-animation') 

        setTimeout(()=>{
            document.querySelector('.planetFacts-planet-description').classList.remove('planetFacts-planet-desc-animation')  
        },600)
     }, [location])


     useEffect(() => {
        document.querySelector('.planetFacts-planet-description').classList.add('planetFacts-planet-desc-animation') 

        setTimeout(()=>{
            document.querySelector('.planetFacts-planet-description').classList.remove('planetFacts-planet-desc-animation')  
        },600)

        if(tabIndex === 'planetSurface') {
            document.querySelector('.planetFacts-geology-img').classList.add('planetFacts-planet-desc-animation') 

            setTimeout(()=>{
                document.querySelector('.planetFacts-geology-img').classList.remove('planetFacts-planet-desc-animation')  
            },600)
        }

     }, [tabIndex])

    return (
        <section className='planetFacts-planet-section'
        data-aos="fade-in"    
        data-aos-delay="250"
        data-aos-duration="500" 
        >
            <section className="planetFacts-main-content-container">
                <div className="planetFacts-tabs-container">
                    <button id='planetOverview' className={`planetFacts-tab-btn planetFacts-tab-btn-active planet-${(planet.name).toLowerCase()}-btn`}
                    onClick={handleTabOverview}
                    >
                        <span className="planetFacts-tab-btn-index">01</span> Overview
                    </button>
                    <button id='planetInternal' className={`planetFacts-tab-btn planet-${(planet.name).toLowerCase()}-btn`}
                    onClick={handleTabInternal}
                    >
                        <span className="planetFacts-tab-btn-index">02</span>
                        <span className='planetFacts-tab-desktop'>Internal Structure </span>
                        <span className='planetFacts-tab-mobile'>Structure </span>
                    </button>
                    <button id='planetSurface' className={`planetFacts-tab-btn planet-${(planet.name).toLowerCase()}-btn`}
                    onClick={handleTabSurface}
                    >
                        <span className="planetFacts-tab-btn-index">03</span>
                        <span className='planetFacts-tab-desktop'>Surface Geology </span>
                        <span className='planetFacts-tab-mobile'>Geology </span>
                    </button>
                </div>
                
                 <div className="planetFacts-illustration-container">
                     <img src={planetImg} alt="" />
                     {
                         tabIndex === 'planetSurface' && <img src={planet.images.geology} className='planetFacts-geology-img' alt="" />
                     }
                     
                 </div>
                <div className="planetFacts-text-content" >
                    <h1 className="planetFacts-planet-title">{planet?.name}</h1>
                    <p className="planetFacts-planet-description"
                    >{planetContent}</p>
                    <div className="planetFacts-source-link-text">
                        Source : 
                        <a href={planet.overview.source} target="_blank" rel="noreferrer" className="planetFacts-source-link"> Wikipedia
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity="1"/></svg>
                        </a>

                    </div>
                
                </div>
             
            </section>
            <ul className="planetFacts-stats">
                {stats.map((stat)=> (
                <li className="planetFacts-stat">
                    <h4 className="planetFacts-stat-title">
                         {stat.name}
                    </h4>
                    <span className="planetFacts-stats-info">
                        {stat.stat}
                    </span>
                </li>
                ))}
            </ul>
        </section>
      
    )
}

export default PlanetSection
