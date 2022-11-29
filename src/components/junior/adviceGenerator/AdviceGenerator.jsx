import React from 'react'
import Advice from './Advice/Advice'
import './AdviceGenerator.css'
import LearnMore from './LearnMore/LearnMore'

const AdviceGenerator = () => {
    return (
        <div className="advice-generator">
            <Advice></Advice>
            {/* <LearnMore></LearnMore> */}
        </div>
    )
}

export default AdviceGenerator
