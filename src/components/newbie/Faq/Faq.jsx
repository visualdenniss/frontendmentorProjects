import React from 'react'
import './Faq.css'
import woman from '../Faq/assets/faq-accordion-card-main/images/illustration-woman-online-desktop.svg'
import arrow from '../Faq/assets/faq-accordion-card-main/images/icon-arrow-down.svg'
import box from '../Faq/assets/faq-accordion-card-main/images/illustration-box-desktop.svg'

const Faq = () => {


    const handleToggle = (e) => {
        
        // // reset 
        const question = e.target 
        const answer = e.target.nextSibling 

        const openQuestions = document.querySelectorAll('.faq-accordion-answer-active')
        if(openQuestions) {
            openQuestions.forEach(item => 
                {   console.log(item)
                    console.log(question);;
                    item.classList.remove('faq-accordion-answer-active')
                    console.log('1');
                })      
            }

        const openBtn = document.querySelectorAll('.faq-accordion-question-button-active')
            if(openBtn) {
            openBtn.forEach(btn => 
                {
                    btn.classList.remove('faq-accordion-question-button-active')
                })      
            }
            console.log('2');
        if(question.classList.contains('faq-accordion-question-button-active')) {
            console.log('yez');
        }
        question.classList.add('faq-accordion-question-button-active')
        console.log('3');
        // question.classList.toggle('faq-accordion-question-button-active')
        
        answer.classList.toggle('faq-accordion-answer-active')

    }

    return (
        <div className='faq-accordion df'>
           <div className="faq-accordion-container">
               <div className="faq-accordion-content">
                   <h1 className="faq-accordion-title">FAQ</h1>
                   <div className="faq-accordion-question">
                   <button className="faq-accordion-question-button" onClick={handleToggle}> How many team members can I invite?</button>
                    <div className="faq-accordion-answer">
                        <p>  You can invite up to 2 additional users on the Free plan. There is no limit on 
                            team members for the Premium plan.</p>
                    </div>
                   </div>
                   <div className="faq-accordion-question">
                   <button className="faq-accordion-question-button" onClick={handleToggle}>   What is the maximum file upload size?</button>
                    <div className="faq-accordion-answer">
                        <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                    </div>
                   </div>
                   <div className="faq-accordion-question">
                   <button className="faq-accordion-question-button" onClick={handleToggle}>  How do I reset my password?</button>
                    <div className="faq-accordion-answer">
                        <p>  Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.</p>
                    </div>
                   </div>
                   <div className="faq-accordion-question">
                   <button className="faq-accordion-question-button" onClick={handleToggle}>  Can I cancel my subscription?</button>
                    <div className="faq-accordion-answer">
                        <p> Yes! Send us a message and we’ll process your request no questions asked.</p>
                    </div>
                   </div>
                   <div className="faq-accordion-question">
                   <button className="faq-accordion-question-button" onClick={handleToggle}>Do you provide additional support?</button>
                    <div className="faq-accordion-answer">
                        <p>  Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                    </div>
                   </div>

               </div>
           </div>
        </div>
    )
}

export default Faq
