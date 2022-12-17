import React, {useState} from 'react'
import './ToDo.css'
import desktopDark from './assets/todo-app-main/images/bg-desktop-dark.jpg'
import desktopLight from './assets/todo-app-main/images/bg-desktop-light.jpg'
import mobileDark from './assets/todo-app-main/images/bg-mobile-dark.jpg'
import mobileLight from './assets/todo-app-main/images/bg-mobile-light.jpg'

import moon from './assets/todo-app-main/images/icon-moon.svg'
import sun from './assets/todo-app-main/images/icon-sun.svg'

import List from './List'

const ToDo = () => {


    const [isDark, setIsDark] = useState(true)

    const handleTheme = () => {
        setIsDark(prev=> !prev)
        document.querySelector('.todo').classList.toggle('todo-light')
    }

    return (
        <div className='todo todo-dark'
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        >
            {isDark ? 
            <img src={desktopDark} srcSet={`${desktopDark}, ${mobileDark} 600w`} alt="" className="todo-bg-img"
            />
            :
            <img src={desktopLight} srcSet={`${desktopLight}, ${mobileLight} 600w`} alt="" className="todo-bg-img"/>
        }
            <main className="todo-wrapper">
                <header className='todo-header'>
                    <h1 className="todo-title">
                        TODO
                    </h1>
                    <img onClick={handleTheme} src={isDark ? sun : moon} alt="" className="todo-theme-switch"
                    />
                </header>
                <List></List>
            </main>
        </div>
    )
}

export default ToDo
