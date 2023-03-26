import React from 'react'
import './SwitchAccount.css'
import {motion} from 'framer-motion'

const SwitchAccount = ({users, currentUser, setCurrentUser}) => {
    return (
        <header className="comment-section-header">
        <nav className="comment-section-nav">
            <ul className="comment-section-list">
                {users.map((user, index)=> (
                <motion.li key={index + user.username} 
                initial={{opacity:0, y: 20,  scale: 0}}
                animate={{opacity:1, y: 0, scale: 1, 
                    transition: {
                        delay: .4 + ( 0.2 * index),
                        ease:  [0.25, 0.46, 0.45, 0.94], 
                        duration: 1,
                    }}}
                className={currentUser.id === user.id ? "comment-section-list-item comment-section-active-user" : "comment-section-list-item"}>
                    <button tabindex="0" onClick={()=>setCurrentUser(users[index])}>
                        <img src={user.image.png} alt="" />
                    </button>
                </motion.li>
                ))}
            </ul>
        </nav>
    </header>
    )
}

export default SwitchAccount
