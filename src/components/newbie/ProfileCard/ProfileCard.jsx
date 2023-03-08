import React from 'react'
import './ProfileCard.css'
import avatar from './assets/images/image-victor.jpg'
import {motion} from 'framer-motion'
import {basicFadeUpProfile,  basicFadeUp2Profile, basicFadeUp3Profile ,basicScaleUpProfile } from './animation'

const ProfileCard = () => {

    const statsData = [
        {
            statName: 'Followers',
            stat: '80K'
        },
        {
            statName: 'Likes',
            stat: '803K'
        },
        {
            statName: 'Photos',
            stat: '1.4K'
        },
    ]

    return (
        <div className='profile-card-wrapper'>
            <motion.main {...basicFadeUpProfile}
            className='profile-card-main' role='main'>
                <div className="profile-card-header">
                    <div className="profile-card-header-body">
                    <motion.img {...basicScaleUpProfile}               
                    src={avatar} alt="Avatar of Victor Crest" />
                    <div className="profile-card-bio">
                    <motion.h2 {...basicFadeUp2Profile}
                    className='profile-card-name'>
                        Victor Crest
                    <span className='profile-card-age'>26</span></motion.h2>
                    </div>
                    </div>
                    <motion.p {...basicFadeUp3Profile}               
                    className="profile-card-location">
                        London
                    </motion.p>
                </div>
                <ul className="profile-card-stats" aria-label="Profile stats">
                        {statsData.map((stat, index)=> {
                            return (
                                <motion.li 
                                initial={{opacity:0, scale: 0}}
                                animate={{opacity:1, scale: 1, 
                                transition: {
                                    delay: 1.4 + (0.2 * index),
                                    ease: 'easeOut',
                                    duration: .6,
                                }}}
                                key={`${stat.statName}1234`} className="profile-card-stat-item"
                                role='list-item'>
                                    <span>{stat.stat}</span>
                                    <p>{stat.statName}</p>
                                </motion.li>
                            )
                        })}
                </ul>
            </motion.main>
        </div>
    )
}

export default ProfileCard
