import React, {useState} from 'react'
import axios from 'axios'
import './GithubUser.css'
import UserCard from './UserCard/UserCard'
import search from './assets/images/icon-search.svg'
import moon from './assets/images/icon-moon.svg'
import logoLight from './assets/images/logo-white-fill.svg'
import logoDark from './assets/images/logo-dark-fill.svg'
import octocat from './assets/images/octocat.jpg'

const GithubUser = () => {

    const defaultUser = {
        name: 'The Octocat',
        avatar_url : octocat,
        login: 'octocat',
        bio : "This profile has no bio",
        location: 'San Francisco',
        public_repos : 8,
        followers : 3938,
        following : 9,
        location : "San Francisco",
        company: '@github',
        blog: 'https://github.blog',
        created_at: '2011-01-25TZ'
    }

    const [isDark, setIsDark] = useState(true)
    const [username, setUsername] = useState('')
    const [user,setUser] = useState(defaultUser)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleTheme = () => {
        document.querySelector(".githubUser").classList.toggle("githubUser-light-theme"); 
        setIsDark(prev => !prev)
    }

    const lightStyle = {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    }


    const FetchData = async () => {
        try {
                const res =  await axios.get(`https://api.github.com/users/${username}`)
                setUser(res.data)
                document.querySelector('.githubUser-search-input').value = ''
            }
            catch (error) {
                setError(true)
                if(error.response.status === 404) {
                    setErrorMessage('Not found')
                }
                else {
                    setErrorMessage('Something went wrong..')
                }         
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        FetchData()
    }

    return (
        <div className='githubUser df'>
            <div className="githubUserContainer">
            <header className='githubUser-header' >
                <img className="githubUser-logo" src={isDark ? logoLight : logoDark} alt=""/>
                <div className="githubUser-theme"
                onClick={handleTheme}
                >
                    <p className="githubUser-theme-info">
                       {isDark ? 
                       <div>LIGHT</div> 
                       : 
                       <div className="githubUser-theme-dark-text" 
                       >DARK</div>}
                    </p>
                    <button className="githubUser-theme-switcher">
                        {isDark ? 
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="nonzero"><path className="githubUser-theme-light-icon" d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g></svg>
                        :
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path
                        className="githubUser-theme-dark-icon"
                        d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" fill-rule="nonzero"/></svg>
                    }
                    </button>
                </div>
            </header>
            <form
            style={!isDark ? lightStyle : {}}
            className="githubUser-search-form">
                <img src={search} alt="" className="githubUser-search-icon"/>
                <input onChange={(e)=>setUsername(e.target.value)} className="githubUser-search-input" type="text" placeholder="Search GitHub username..."/>
                <button className="githubUser-search-btn"
                onClick={handleSubmit}
                >
                    Search
                </button>
                {error && <p>{errorMessage}</p>}
            </form>       
            <UserCard user={user} isDark={isDark} lightStyle={lightStyle}></UserCard>
    
            </div>
        </div>
    )
}

export default GithubUser
