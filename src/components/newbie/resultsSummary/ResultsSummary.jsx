import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './ResultsSummary.css'
import CssLoader from './CssLoader'
import {motion} from 'framer-motion'
import {summaryCard, summaryLeft, summaryRight, summaryItem, summaryItemIcon, summaryScore, scoreContainer } from "./utils.js";

const ease =  [0.25, 0.46, 0.45, 0.94]

const ResultsItem = ({score, category, icon, index}) => {
    const { initial, animate} = summaryItem;
    const transition = {
      ...animate.transition,
      delay: 0.2 * index,
    };

    return (
    <>
        <motion.li initial={initial} animate={{ ...animate, transition }}
        className="results-summary-card-item">
            <motion.img 
            initial={summaryItemIcon.initial}
            animate={{ 
                ...summaryItemIcon.animate, 
                transition: {
                ...summaryItemIcon.animate.transition,
                delay: 0.2 * index,
                },
            }}
            src={icon} alt="" />
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1,
            transition:{
                duration:.4,
                ease:ease, 
                delay: 0.2 * index, 
            }}}             
            >{category}</motion.p>
            <p><span>{score}</span> / 100</p>
        </motion.li>
       </>
    )
}

const ResultingScore = ({resultsList}) => {
    return (
    <motion.div {...summaryScore}>
        {Math.round(resultsList.reduce((acc, cur) => acc + cur.score, 0) / 4)}
    </motion.div>
    )
}

const ResultsSummary = () => {

 const [resultsList, setResultsList] = useState("")
 const [isLoading, setIsLoading] = useState(false)

 useEffect(() => {
    setIsLoading(true)
    async function getResults() {
         try {
            const response = await axios.get("https://api.npoint.io/469a75b28d374aa01541")
            setResultsList(response.data)
            setIsLoading(false)
         } 
         catch (error) {
             console.log(error);
         }
     }
     // added delay just to be able to see spinner longer: 
     setTimeout(()=> {
         getResults()
     }, 1500)
 }, [])

    return (
        <main className='results-summary'>
            <motion.div {...summaryCard} className="results-summary-card">
                <motion.div {...summaryLeft} className="results-summary-card-left">
                    <h1>Your Result</h1>
                    <motion.div {...scoreContainer} className="results-summary-card-score-container">
                        <div className="results-summary-card-score-result">{resultsList ?
                        <ResultingScore resultsList={resultsList} /> : "??"} </div>
                        <p>of 100</p>
                    </motion.div>
                    <span>{resultsList ? "Great" : "Loading..."}</span>
                    <p>You scored higher than {resultsList ? "65%" : "??"} of the people who have taken these tests.</p>
                </motion.div>
                <motion.div {...summaryRight} className="results-summary-card-right">
                    <h1>Summary</h1>
                    <ul className="results-summary-card-list">
                        {isLoading && <CssLoader></CssLoader>}
                            {   resultsList &&
                                resultsList.map((result, i)=>{
                                    return <ResultsItem {...result} index={i} key={i}></ResultsItem>
                                })
                            }
                    </ul>
                    <button>Continue</button>
                </motion.div>               
            </motion.div>
        </main>
    )
}

export default ResultsSummary
