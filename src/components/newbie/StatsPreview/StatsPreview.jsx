import React from 'react'
import { motion} from 'framer-motion'
import './StatsPreview.css'
import img from './assets/stats-preview-card-component-main/images/image-header-desktop.jpg'
import { basicFadeUp2Profile, basicFadeUp3Profile, basicFadeUpProfile } from './animation'

const statsData = [
    {
        title: 'companies',
        stat: '10k+'
    },
    {
        title: 'templates',
        stat: '314'
    },
    {
        title: 'queries',
        stat: '12M+'
    },
]



const StatsPreview = () => {

    return (
        <main className='stats-preview-main'>
            <h1 class="sr-only">Stats preview card component</h1>
                        <motion.article {...basicFadeUpProfile}
                        className='stats-preview-card'>
                            <div className="stats-preview-left">
                                <motion.h2 {...basicFadeUp2Profile}>Get <span> insights</span> that help your business grow.</motion.h2>
                                <motion.p {...basicFadeUp3Profile}> Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                                    experience, and overall efficiency.
                                </motion.p>
                                <ul className='stats-preview-stats'>
                                    {statsData.map((statItem, index)=> {
                                        return (
                                            <motion.li
                                            initial={{opacity:0, scale: 0}}
                                            animate={{opacity:1, scale: 1, 
                                                transition: {
                                                    delay: 2.2 + ( 0.2 * index),
                                                    ease:  [0.25, 0.46, 0.45, 0.94], 
                                                    duration: 1,
                                                }}}
                                            className='stats-preview-stat' key={statItem.title}>
                                                <span>{statItem.stat}</span>
                                                <p>{statItem.title}</p>
                                            </motion.li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div  className="stats-preview-right">
                                    <img src={img}  alt="An Abstract Photo" />
                            </div>
                        </motion.article>
        </main>
    )

}

export default StatsPreview
