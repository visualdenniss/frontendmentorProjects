import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Advice.css'
import icon from '../icon-dice.svg'
import pattern from '../pattern-divider-desktop.svg'


const Advice = () => {

    const [advice, setAdvice] = useState('Click on Dice below to get an advice')
    const [id, setId] = useState('')

    const [cat, setCat] = useState('')

    const url = 'https://api.adviceslip.com/advice'

    const getPost =  async () => {
        try {
            const res = await axios.get(url)
            const advice = res.data.slip.advice
            setAdvice(advice);
            const id = res.data.slip.id
            setId(id)
    
            const catData = await axios.get('https://api.thecatapi.com/v1/images/search')
            const cat = catData.data[0].url
            setCat(cat)
        } catch (err) {
            console.log(err);
        }
    }

    {console.log(advice)}


    return (
        <div data-aos="fade-in" data-aos-delay="250" data-aos-duration="500" className='advice-container'>
            <h4 className='advice-title'>ADVICE #{id}</h4>
            <p className='advice-quote'>{advice}</p>
            <div className="deco">
                <img src={pattern} alt="" />
            </div> 
            <img className='cat-img' src={cat} alt="" />
            <button className="gen-btn" onClick={()=>getPost()}>
                <img className='icon-dice' src={icon} alt="" />
            </button>
        </div>
    )
}

export default Advice