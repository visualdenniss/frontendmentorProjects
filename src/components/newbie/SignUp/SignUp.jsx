import {useState, useEffect} from 'react'
import Form from './Form/Form'
import Modal from './Modal/Modal'
import './SignUp.css'
import { animateWordChange } from './animations/animateWords'
import { gsapLandingAnimation } from './animations/gsapAnimation'
import {termsOfService} from './ToS.js'


const SignUp = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [openToS, setOpenToS] = useState(false)
    const [name,setName] = useState("")

    useEffect(()=> {
        // var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        // if(!mediaQuery.matches) {
        //     gsapLandingAnimation();
        // }
        animateWordChange();
    }, [])

    return (
        <div className='sign-up-page'>
            <main className='sign-up-container'>
            <div className="sign-up-left sign-up-column">
                <h1>
                    <span>Master to&nbsp;
                        <span className="word">design</span>
                        <span className="word">code</span>
                    </span>
                    <span>In simple steps</span>
                </h1>
                <p>
                Learn by watching the best ones in the industry
                Doing their magic in real-time. Get inside their head
                and become one of them today.
                </p>
            </div>
            <div className="sign-up-right sign-up-column">
                 <h2> 
                     <span>Try it free 7 days</span>
                     &nbsp;
                     then $20/mo. thereafter
                 </h2>
                <Form setName={setName} setIsOpen={setIsOpen} setOpenToS={setOpenToS} />
                <p className='signup-form-terms' id="terms">By clicking the button you agree our&nbsp; 
                <button aria-labelledby="terms" onClick={()=> setOpenToS(true)}>terms and services</button>
                </p>
            </div>
            </main>
            {isOpen && <Modal isOpen={isOpen} name={name} setIsOpen={setIsOpen}>
                    <h3>
                    Thank you {name}!
                    </h3>
                     <p>Your free trial has been sent to your email. Please check your inbox for instructions on how to get started.</p>
                 </Modal>}
            {openToS && <Modal isOpen={openToS} setIsOpen={setOpenToS}>  
                    <h3>
                    Terms of Services
                    </h3>
                     <p>These terms and conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
                     </p>
                     <ul>
                         {termsOfService.map(term=><li><p>{term}</p></li>)}
                     </ul>
                     <p>
                     If you have any questions or concerns about these Terms, please contact us at <span style={{textDecoration:'underline'}}>support@mastertodesigncode.com. </span>
                     </p>
                 </Modal>}
        </div>
    )
}

export default SignUp
