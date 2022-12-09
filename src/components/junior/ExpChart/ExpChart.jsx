import React, {useEffect} from 'react'
import './ExpChart.css'
import logo from '../ExpChart/assets/expenses-chart-component-main/images/logo.svg'
import data from '../ExpChart/assets/expenses-chart-component-main/data.json'

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
    }, [])

    return (
        <div className='expChart df'>
            <main className="expChart-container">
                <header className="expChart-header">
                    <div className="expChart-balance-info">
                        <h4 className="expChart-balance-info-title">
                            My balance
                        </h4>
                        <p className="expChart-balance-info-total">
                            $921.48
                        </p>
                    </div>
                    <img src={logo} alt="" className="expChart-logo"/>
                </header>
                <section className="expChart-graph">
                   <h1 className="expChart-graph-title">
                        Spending - Last 7 days
                   </h1>
                    <ul className="expChart-graph-data-container">
                        {data.map((item, index)=>(
                        <li className="expChart-graph-data-info">
                            <div className="expChart-graph-data-vis" key={index} id={index} style={{height:`${(Math.floor(item.amount)*3)}px`}}>
                                <span>${item.amount}</span>
                            </div>
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
                            <div className="expChart-graph-stats-left-total">
                                $478.33
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
                </section>
            </main>
        </div>
    )
}

export default ExpChart
