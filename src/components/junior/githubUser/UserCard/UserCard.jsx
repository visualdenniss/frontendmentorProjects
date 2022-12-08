import React, {useEffect, useState} from 'react'
import './UserCard.css'
import location from '../assets/images/icon-location.svg'
import website from '../assets/images/icon-website.svg'
import twitter from '../assets/images/icon-twitter.svg'
import company from '../assets/images/icon-company.svg'


const UserCard = ({isDark, lightStyle, user}) => {

    const [date, setDate] = useState('')
    const userDate = user?.created_at

    const months = {
        "01" : 'Jan',
        "02" : 'Feb',
        "03" : 'Mar',
        "04" : 'Apr',
        "05" : 'May',
        "06" : 'Jun',
        "07" : 'Jul',
        "08" : 'Aug',
        "09" : 'Sep',
        "10" : 'Oct',
        "11" : 'Nov',
        "12" : 'Dec',
    }

    useEffect(()=>{
       const newDate = userDate.split("-")
       const year = newDate[0]
       const month = newDate [1]
       const day = newDate[2].substr(0,2)
       setDate(year + ' ' + months[month] + ' ' + day)
    },[userDate])

    const notAvailableStyle = {
        color: "#697c9b",
        cursor: 'initial',
    }

    return (
        <main className="githubUser-Card" style={!isDark ? lightStyle : {}}>
           <img src={user?.avatar_url ? user.avatar_url : 'No Avatar Available'} alt="" className="githubUser-Card-avatar"/>
           <div className="githubUser-Card-person-info">
               <div className="githubUser-Card-person-info-left">
                   <h2 className="githubUser-Card-person-info-username"
                   style={user?.name == null ? notAvailableStyle : {}}
                   >
                       {user?.name == null ? 'Not available' : user.name }
                   </h2>
                   <a className="githubUser-Card-person-info-username-at"
                   rel="noreferrer"
                   target="_blank"
                   href={user ? user.html_url : "#"}>
                       @{user?.login ? user.login : 'Not available'}
                   </a>
               </div>
                <div className="githubUser-Card-person-info-right">
                    <p className="githubUser-Card-person-info-joined-date">
                        Joined {`${date}`}
                    </p>
                </div>
           </div>
           <div className="githubUser-Card-person-bio"
           style={!user.bio ? notAvailableStyle : {}}
           >
               {user?.bio ? user.bio : "This profile has no bio"}
            </div>
           <ul className="githubUser-Card-person-stats">
               <li className="githubUser-Card-person-stats-item">
                   <div className="githubUser-Card-person-stats-title">
                       Repos
                   </div>
                   <div className="githubUser-Card-person-stats-data">
                       {user ? user.public_repos : 'Not available'}
                   </div>
               </li>
               <li className="githubUser-Card-person-stats-item">
                   <div className="githubUser-Card-person-stats-title">
                       Followers
                   </div>
                   <div className="githubUser-Card-person-stats-data">
                       {user ? user.followers : 'Not available'}
                   </div>
               </li>
               <li className="githubUser-Card-person-stats-item">
                   <div className="githubUser-Card-person-stats-title">
                       Following
                   </div>
                   <div className="githubUser-Card-person-stats-data">
                       {user ? user.following : 'Not availabe'}
                   </div>
               </li>

           </ul>
           <ul className="githubUser-Card-person-links">
               <li className="githubUser-Card-person-links-item">
                   <img src={location} alt="" className="githubUser-Card-person-links-icon"/>
                   <div className="githubUser-Card-person-links-desc"
                   style={!user.location ? notAvailableStyle : {}}
                   >
                        {user?.location ? user.location : "Not available" }
                   </div>
               </li>
               <li className="githubUser-Card-person-links-item">
                   <img src={twitter} alt="" className="githubUser-Card-person-links-icon"/>
                   <div className="githubUser-Card-person-links-desc"
                   style={!user.twitter_username ? notAvailableStyle : {}}
                   >
                        {user?.twitter_username ? user.twitter_username : 
                        "Not available" }
                   </div>
               </li>
               <li className="githubUser-Card-person-links-item">
                   <img src={website} alt="" className="githubUser-Card-person-links-icon"/>
                   <a href={user?.blog ? user.blog : "Not available"}
                   rel="noreferrer"
                   target= "_blank"
                   className="githubUser-Card-person-links-desc"
                   style={!user.blog ? notAvailableStyle : {}}
                   >
                         {user?.blog ? user.blog : "Not available" }
                   </a>
               </li>
               <li className="githubUser-Card-person-links-item">
                   <img src={company} alt="" className="githubUser-Card-person-links-icon"/>
                   <div className="githubUser-Card-person-links-desc"
                   style={!user.company ? notAvailableStyle : {}}
                   >
                        {user?.company ? user.company : "Not available" }
                   </div>
               </li>
           </ul>
        </main>
    )
}

export default UserCard
