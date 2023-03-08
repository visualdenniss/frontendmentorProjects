import React from 'react'
import './ProfileCard.css'
import avatar from './assets/images/image-victor.jpg'
import {motion} from 'framer-motion'

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
            <motion.main
            initial={{opacity:0}}
            animate={{opacity:1, 
                transition: {
                    ease: 'easeOut',
                    duration: .4,
                }}}

            className='profile-card-main' role='main'>
                <header className="profile-card-header">
                    <div className="profile-card-header-body">
                    <img src={avatar} alt="Avatar of Victor Crest" />
                    <div className="profile-card-bio">
                    <h2 className='profile-card-name'>
                        Victor Crest
                    <span className='profile-card-age'>26</span></h2>
                    </div>
                    </div>
                    <p className="profile-card-location">
                        London
                    </p>
                </header>
                <ul className="profile-card-stats" aria-label="Profile stats">
                        {statsData.map((stat, index)=> {
                            return (
                                <motion.li 
                                initial={{opacity:0, scale: 0}}
                                animate={{opacity:1, scale: 1, 
                                transition: {
                                    delay: 0.8 + (0.4 * index),
                                    ease: 'easeOut',
                                    duration: .4,
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
