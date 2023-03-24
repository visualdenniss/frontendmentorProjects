import React from 'react'
import './SwitchAccount.css'

const SwitchAccount = ({users, currentUser, setCurrentUser}) => {
    return (
        <header className="comment-section-header">
        <nav className="comment-section-nav">
            <ul className="comment-section-list">
                {users.map((user, index)=> (
                <li key={index + user.username} 
                className={currentUser.id === user.id ? "comment-section-list-item comment-section-active-user" : "comment-section-list-item"}>
                    <button onClick={()=>setCurrentUser(users[index])}>
                        <img src={user.image.png} alt="" />
                    </button>
                </li>
                ))}
            </ul>
        </nav>
    </header>
    )
}

export default SwitchAccount
