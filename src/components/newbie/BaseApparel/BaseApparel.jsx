import React, { useState, useEffect } from 'react'
import './BaseApparel.css'
import deco from './deco.jpg'
import { gsapAnimationDesktop, gsapAnimationMobile } from './gsap-animation';

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const BaseApparel = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false)
  
  const handleSubmit  = (e) => {
    e.preventDefault()

    if (!isEmail(email)) {
      setError("Invalid email");
    }

    else {
      console.log(email);
      setSubscribed(true)
    }
  }

  const handleEmailInput = (e) => {
    setError('')
    setEmail(e.target.value)
  }


  useEffect(()=> {

    var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if(window.innerWidth > 900 && !mediaQuery.matches) {
      gsapAnimationDesktop();
    }

    else if(window.innerWidth < 900 && !mediaQuery.matches) {
      gsapAnimationMobile()
    }
  },[])

    return (
        <main className='base-apparel-container'>
                <div class="base-apparel-left base-apparel-column">
                    <header>
                        <a href="" target="_blank"className="base-apparel-logo">
                            <div className="base-apparel-logo-circle"></div>
                            <div className="base-apparel-logo-text-wrapper">
                            <div className="base-apparel-logo-text ml12">BASE</div>
                            <div className="base-apparel-logo-text ml13">APPAREL</div>
                            </div>
                        </a>
                    </header>
                    <section class="base-apparel-body">
                        <h2><svg class="text">
                        <text x="0" y="calc((62/16)*1rem)">
                            <tspan class="textto">W</tspan>
                            <tspan class="textto">E</tspan>
                            <tspan class="textto">'</tspan>
                            <tspan class="textto">R</tspan>
                            <tspan class="textto">E</tspan>
                        </text>
                        </svg> <br /> 
                        <span>
                        COMING
                        </span>
                        <br />
                        <span>SOON</span>
                        </h2>
                        <p>
                            <span>Hello fellow shoppers! We're currently building our new </span>
                            <span>fashion store. 
                        Add your email below to stay up-to-date with </span>
                            <span>announcements and our launch deals.</span>
                        </p>
                        <div className="base-apparel-body-deco-wrapper">
                            <div className="base-apparel-body-deco-overlay"></div>
                            <img src={deco} alt="" />
                        </div>
                        {subscribed ? 
                        <p style={{fontSize:'2rem', color: 'var(--base-apparel-header)'}}>Thank you for subscribing!</p>
                        : 
                        <>
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={handleEmailInput} placeholder="Email Adress" aria-describedby="enter-email-to-subscribe"
                            aria-invalid={error ? "true" : "false"} />
                            <button id="submit" type="submit" aria-label="Submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg>
                            </button>
                        </form>
                        {error && <p aria-describedby="invalid-email" role="alert" style={{color: 'hsl(0, 66%, 60%)',marginTop:'1rem'}}>{error}</p>}
                        </>
                      }
                    </section>
                </div>
                <div class="base-apparel-right base-apparel-column">
                  <div className="base-apparel-bg-2"></div>
                </div>
        </main>
    )
}

export default BaseApparel
