import React from 'react'
import './FourCards.css'

import calculator from '../FourCards/assets/four-card-feature-section-master/images/icon-calculator.svg'
import karma from '../FourCards/assets/four-card-feature-section-master/images/icon-karma.svg'
import supervisor from '../FourCards/assets/four-card-feature-section-master/images/icon-supervisor.svg'
import teambuilder from '../FourCards/assets/four-card-feature-section-master/images/icon-team-builder.svg'

const FourCards = () => {

    const card = [
        {
            title: "Supervisor",
            desc: "Monitors activity to identify project roadblocks", 
            img: supervisor, 
        },
        {
            title: "Team Builder",
            desc: "Scans our talent network to create the optimal team for your project", 
            img: teambuilder, 
        },
        {
            title: "Karma",
            desc: "Regularly evaluates our talent to ensure quality", 
            img: karma, 
        },
        {
            title: "Calculator",
            desc: "Uses data from past projects to provide better delivery estimates", 
            img: calculator, 
        },
    ]


    return (
        <div className='fourCards'>
            <h1 className="fourCards-title">
                 Reliable, efficient delivery
            </h1>
            <h1 className="fourCards-title">
                Powered by Technology
            </h1>

        <p className="fourCards-desc">
            Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful
        </p>
        <div className="fourCards-cards-container">
            <div className="fourCards-cards-left">
                <div className="fourCards-card-item fourCards-cyan">
                    <div className="fourCards-card-item-title">{card[0].title}</div>
                    <div className="fourCards-card-item-desc">{card[0].desc}</div>
                    <div className="fourCards-card-item-img">
                        <img src={card[0].img} alt=""/>
                    </div>
                </div>
            </div>
            <div className="fourCards-cards-center">
                <div className="fourCards-card-item fourCards-red">
                    <div className="fourCards-card-item-title">{card[1].title}</div>
                    <div className="fourCards-card-item-desc">{card[1].desc}</div>
                    <div className="fourCards-card-item-img">
                        <img src={card[1].img} alt=""/>
                    </div>
                </div>
                <div className="fourCards-card-item fourCards-orange">
                    <div className="fourCards-card-item-title">{card[2].title}</div>
                    <div className="fourCards-card-item-desc">{card[2].desc}</div>
                    <div className="fourCards-card-item-img">
                        <img src={card[2].img} alt=""/>
                    </div>
                </div>
            </div>
            <div className="fourCards-cards-right">
                <div className="fourCards-card-item fourCards-blue">
                    <div className="fourCards-card-item-title">{card[3].title}</div>
                    <div className="fourCards-card-item-desc">{card[3].desc}</div>
                    <div className="fourCards-card-item-img">
                        <img src={card[3].img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FourCards
