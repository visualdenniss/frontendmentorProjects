import React, {useState} from 'react'
import './Nav.css'


const Nav = ({navData}) => {

    const [openMenu, setOpenMenu] = useState(false)
    const {logo,links,menuOpen,menuClosed} = navData

    const handleToggle = () => {
        setOpenMenu(!openMenu)
        document.querySelector('.newsHome-nav-links-mobile-container').classList.toggle('newsHome-nav-links-mobile-container-active')
    }

    return (
        <nav className='newsHome-nav'>
            {openMenu && 
                (<div data-aos="fade-in"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="newsHome-overlay"></div>
                )}
            <div className="newsHome-nav-logo">
                <img className="newsHome-nav-logo-img" src={logo} alt=""/>
            </div>
            <ul className="newsHome-nav-links">
                {
                    links.map((link)=>(
                        <li className="newsHome-nav-link">
                            <a href="">{link}</a>
                        </li>
                    ))
                }
            </ul>
            <button className="newsHome-nav-toggle" 
            onClick={handleToggle}>
                {openMenu ? (
                    <img className="newsHome-nav-toggle-close" src={menuClosed} alt=""/>
                ): (
                    <img className="newsHome-nav-toggle-open" src={menuOpen} alt=""/> 
                )}
            </button>

           <div className="newsHome-nav-links-mobile-container">
           <ul className="newsHome-nav-links-mobile">
                {
                    links.map((link)=>(
                        <li className="newsHome-nav-link-mobile">
                            <a href="">{link}</a>
                        </li>
                    ))
                }
            </ul>
            </div>
        </nav>
    )
}

export default Nav
