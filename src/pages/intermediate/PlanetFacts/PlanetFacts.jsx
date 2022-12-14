import React, {useState, useEffect} from 'react'
import './PlanetFacts.css'
import planets from './planets.json'
import Nav from './Nav/Nav'
import PlanetSection from './PlanetSection/PlanetSection'
import { useLocation } from 'react-router-dom';

const PlanetFacts = () => {
    const [planet,setPlanet] = useState(planets.find((planet) => planet.name === 'mercury'))
    let location = (useLocation().pathname).split('/')

    useEffect(() => {
        { location[3] === '' || planet === '' ? 
        setPlanet(planets.find((planet) => (planet.name) === 'mercury'))
        : 
        setPlanet(planets.find((planet) => (planet.name) === location[3]))
        }
    },[location])

    useEffect(()=>{
        setPlanet(planets.find((planet) => (planet.name) === 'mercury'))
    },[])

    return (
        <div className='planetFacts'>
            <Nav planets={planets}></Nav>
            <PlanetSection planet={planet} location={location}></PlanetSection>
        </div>
    )
}

export default PlanetFacts
