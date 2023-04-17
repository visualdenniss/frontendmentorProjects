
import {gsap} from 'gsap'

export const gsapLandingAnimation = () => {

    gsap.fromTo(".signup-field", {
        width: 0, left: "50%",  
    }, {
       width: "100%", left: 0, duration: 1, delay: .6, stagger: .15, ease: "Power4.out", 
    })

    gsap.fromTo(".signup-field-label-text", {
        opacity: 0, 
    } , {
        opacity: 1, delay: .6, stagger: .15,  duration: .8, ease: "Power4.in",
    })

    gsap.fromTo("h1", { opacity: 0}, {opacity: 1, duration: .4, delay: 1.8, ease: "easeOut"})

    gsap.fromTo(".sign-up-left", { y: 40}, {y: 0, duration: 1.5, delay: 1.8, ease: "easeOut"})

    gsap.fromTo(".sign-up-left p", { opacity: 0, y: 40}, {y: 0, opacity: 1, duration: 1.5, delay: 2.2, ease: "easeOut"})

    gsap.fromTo("h2", { opacity: 0}, {opacity: 1, duration: 1.5, delay: 1.8, ease: "easeOut"})

    gsap.fromTo(".signup-form > input", { opacity: 0}, {opacity: 1, duration: .6, delay: 1.8, ease: "easeIn"})

    gsap.fromTo(".signup-form-terms", { opacity: 0}, {opacity: 1, duration: 1, delay: 2.4, ease: "easeOut"})
}