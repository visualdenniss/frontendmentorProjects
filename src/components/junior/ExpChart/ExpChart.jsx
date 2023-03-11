import React, {useEffect} from 'react'
import './ExpChart.css'
import logo from '../ExpChart/assets/expenses-chart-component-main/images/logo.svg'
import data from '../ExpChart/assets/expenses-chart-component-main/data.json'
import { motion } from 'framer-motion'
import { basicFadeUp2Profile, basicFadeUpProfile } from './animation'

const ExpChart = () => {

    const findHigh = () => {
      let max = 0, indx = 0;
      data.map((item)=>{
        return item.amount
      }).forEach((item, index)=>{
        if(item > max) {
            max = item 
            indx = index
        }
      })
      return indx       
    }
    
    const addStyle = () => {
        const highest = ''+findHigh()
        document.getElementById(highest).classList.add('expChart-graph-data-vis-highest')
    }


    useEffect(()=>{
    addStyle()

    // ANIMATE COUNTER 
    setTimeout(()=> {

        const counters = document.querySelectorAll('.expChart-graph-stats-left-total');
        const speed = 500;
    
        counters.forEach( counter => {
        const animate = () => {
            const value = +counter.getAttribute('counter');
            const data = +counter.innerText;
            
            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
                }else{
                counter.innerText = `$${value}`;
                }
            
        }
        
        animate();
        });

    },1200)

    }, [])

    return (
        <div className='expChart df'>
            <main className="expChart-container">
                <motion.header {...basicFadeUpProfile} className="expChart-header">
                    <div className="expChart-balance-info">
                        <h4 className="expChart-balance-info-title">
                            My balance
                        </h4>
                        <p className="expChart-balance-info-total">
                            $921.48
                        </p>
                    </div>
                    <img src={logo} alt="" className="expChart-logo"/>
                </motion.header>
                <motion.section {...basicFadeUp2Profile} className="expChart-graph">
                   <h1 className="expChart-graph-title">
                        Spending - Last 7 days
                   </h1>
                    <ul className="expChart-graph-data-container">
                        {data.map((item, index)=>(
                        <li className="expChart-graph-data-info">
                            <motion.div 
                            initial={{height:'0px'}}
                            animate={{height:(Math.floor(item.amount)*3), 
                            transition:{duration: .2, 
                            ease:[0.25, 0.46, 0.45, 0.94], 
                            delay: 1.2+ (0.15 * index)
                            }}}
                            className="expChart-graph-data-vis" key={index} id={index} style={{height:`${(Math.floor(item.amount)*3)}px`}}>
                                <span>${item.amount}</span>
                            </motion.div>
                            <div className="expChart-graph-data-day">
                                {item.day}
                            </div>
                        </li>
                        ))}
                    </ul>
                    <div className="expChart-graph-stats">
                        <div className="expChart-graph-stats-left">
                            <div className="expChart-graph-stats-left-desc">
                                 Total this month
                            </div>
                            <div className="expChart-graph-stats-left-total" counter="478.33">
                                {/* $478.33 */}
                            </div>
                        </div>
                        <div className="expChart-graph-stats-right">
                            <div className="expChart-graph-stats-right-rate">
                                +2.4%
                            </div>
                            <div className="expChart-graph-stats-right-desc">
                                from last month
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    )
}

export default ExpChart
