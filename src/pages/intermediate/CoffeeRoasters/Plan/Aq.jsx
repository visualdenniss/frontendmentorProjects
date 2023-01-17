import React, {useState, useEffect} from 'react'
import './Aq.css'
import { PlanData } from '../data'

const Aq = () => {

    const [showLightBox, setShowLightBox] = useState(false)
    const [showError,setShowError] = useState(false)
    const [summary, setSummary] = useState({
        Q01: '_____ ',
        Q02: '_____ ', 
        Q03: '_____ ',
        Q04: '_____ ', 
        Q05: '_____ ', 
    })
    const [price, setPrice] = useState(0)

    const steps = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries']

    const handleFormItem = (e) => {
        const question = e.target 
        const answer = e.target.nextSibling 
        
        question.classList.toggle('coffee-plan-aq-form-item-question-open')
        answer.classList.toggle('coffee-plan-aq-form-answers-open')

    }

    const handleAnswer = (answerId, questionId) => {
        const answer = document.querySelector(`#${answerId}`)

        //RESET SELECTED STYLE FOR ALL 
        for (let i = 0; i < 3; i++) {
            const answerItemId = questionId+i 
            const answerItem = document.querySelector(`#${answerItemId}`)
            if(answerItem.classList.contains('coffee-plan-aq-form-answer-item-selected')){
                answerItem.classList.remove('coffee-plan-aq-form-answer-item-selected')
            } 
        }

        // ADD STYLE 
        answer.classList.add('coffee-plan-aq-form-answer-item-selected')

        // SET ANSWER 
        const answerText = answer.firstChild.textContent
        setSummary({...summary,[questionId]:answerText})
    }

    const showSummaryLightBox = () => {
        if(summary.Q01 !== 'Capsule') {
            if(Object.entries(summary).some((item)=> item[1] === '_____ ')) {
                setShowError(true)
                setTimeout(()=>{
                    setShowError(false)
                }, 2000)
                return
            }
        } else if(summary.Q01 === 'Capsule') {
          const filterOutGrind = Object.entries(summary).filter((item) => item[0] !== 'Q04')
          if (filterOutGrind.some((item)=> item[1] === '_____ ')) {
            setShowError(true)
            setTimeout(()=>{
                setShowError(false)
            }, 2000)
            return
          }
        } 
            calculatePrice()
            setShowLightBox(true)
    }

    const calculatePrice = () => {
        let calculatedPrice = 0;
        if(summary.Q05 === 'Every week')  {
            let weeklyPrice = 0 
            if(summary.Q03 === '250g') {
                weeklyPrice = 7.20 
            } else if (summary.Q03 === '500g') {
                weeklyPrice = 13.00
            } else {
                weeklyPrice = 22.00
            }
            calculatedPrice = weeklyPrice * 4 
        }
        else if(summary.Q05 === 'Every 2 weeks')  {
            let BiWeeklyPrice = 0 
            if(summary.Q03 === '250g') {
                BiWeeklyPrice = 9.60
            } else if (summary.Q03 === '500g') {
                BiWeeklyPrice = 17.00
            } else {
                BiWeeklyPrice = 32.00
            }
            calculatedPrice = BiWeeklyPrice * 2 
        } 
        else if(summary.Q05 === 'Every month') {
            if(summary.Q03 === '250g') {
                calculatedPrice = 12.00
            } else if (summary.Q03 === '500g') {
                calculatedPrice = 22.00
            } else {
                calculatedPrice = 42.00
            }
        }
        setPrice(calculatedPrice)
    }

    useEffect(()=> {
        const question = document.querySelector(`#Q01`).firstChild
        question.classList.add('coffee-plan-aq-form-item-question-open')
        const answer = document.querySelector(`#Q01`).lastChild
        answer.classList.add('coffee-plan-aq-form-answers-open')
    },[])

    useEffect(()=>{
        const grind = document.querySelector('#Q04')
        if(summary.Q01 === 'Capsule') {
            grind.classList.add('coffee-plan-aq-form-item-disabled')
        }
        if(summary.Q01 !== 'Capsule') {
            if(grind.classList.contains('coffee-plan-aq-form-item-disabled')) {
                grind.classList.remove('coffee-plan-aq-form-item-disabled')
            }
        }
    },[summary])

     
    return (
        <section className='coffee-plan-aq'>
            <ul className="coffee-plan-aq-steps">
                {steps.map((step,index)=> 
                (
                    <li id={index}>
                        <span>0{index+1}</span>
                        <h4>{step}</h4>
                    </li>
                ))}
            </ul>
            <ul className="coffee-plan-aq-form">
                {PlanData.map((item)=>(
                <li className='coffee-plan-aq-form-item' id={item.id} key={item.id}>
                    <h2 className='coffee-plan-aq-form-item-question' onClick={handleFormItem}>{item.question}</h2>
                    <ul className='coffee-plan-aq-form-answers'>
                        {item.answers.map((answer, index)=>(
                        <li className='coffee-plan-aq-form-answer-item' onClick={()=>handleAnswer((item.id + index), item.id)} id={item.id + index}>
                            <h4 className='coffee-plan-aq-form-answer-title'>{answer.title}</h4>
                            <p className='coffee-plan-aq-form-answer-desc'>{answer.desc}</p>
                        </li>
                        ))}
                    </ul>
                </li>
                ))}
                <div className="coffee-form-order-summary">
                    <h5>ORDER SUMMARY</h5>
                    <p>“I drink my coffee as <span>{summary.Q01}</span>, with a <span>{summary.Q02}</span> type of bean. <span>{summary.Q03}</span>  {summary.Q01 !== 'Capsule' && 'ground ala'} <span>{summary.Q01 !== 'Capsule' && summary.Q04}</span>, sent to me <span>{summary.Q05}</span>.”</p>
                </div>
                <button className='coffee-hero-cta' onClick={showSummaryLightBox}>Create my plan!</button>
                {showError &&
                <p style={{color:'red', width:'max-content', marginLeft:'auto', padding: '20px'}}>All fields must be filled</p>
                }
            </ul>
            {
                showLightBox && 
                <div className="coffee-summary-lightbox">
                    <div className="coffee-summary-content">
                        <h3>Order Summary</h3>
                        <div className="coffee-summary-content-text">
                        <p>“I drink my coffee as <span>{summary.Q01}</span>, with a <span>{summary.Q02}</span> type of bean. <span>{summary.Q03}</span>  {summary.Q01 !== 'Capsule' && 'ground ala'} <span>{summary.Q01 !== 'Capsule' && summary.Q04}</span>, sent to me <span>{summary.Q05}</span>.”</p>
                        <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.</p>
                        <div className="coffee-summary-details">
                            <p>${price}/mo</p>
                            <button className='coffee-hero-cta' onClick={()=>setShowLightBox(false)}>Checkout</button>
                        </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Aq
