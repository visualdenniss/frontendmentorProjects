import React, {useState, useEffect,createContext} from 'react'
import './CommentSection.css'
import './Loader.css'
import AddComment from './components/AddComment/AddComment'
import Comments from './components/Comments/Comments'
import axios from 'axios'
import {users} from './Users'



import {UserContext}  from './context/UserContext'
import SwitchAccount from './SwitchAccount'

export const CommentsContext = createContext(null);


const CommentSection = () => {

    const [currentUser, setCurrentUser] = useState(users[0])
    const [comments, setComments] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [darkMode, setDarkMode] = useState(false)


      useEffect(() => {
          setIsLoading(true)
          const getData = async () => {
              try {
               const response = await axios.get("https://api.npoint.io/767dca33270897ca4365")

               // THIS setTimeout IS ONLY FOR DEMO PURPOSE 
               // - TO MAKE SPINNER APPEAR LONGER ON SCREEN 
               // IN REAL APP, OFC would be no setTimeout 
            //    setTimeout(()=>{
            //        setComments(response.data.comments)
            //        setIsLoading(false)
            //    },2000)

               setComments(response.data.comments)
               setIsLoading(false)
              
              } catch (err) {
                  console.log(err);
              }
          }
          getData()
      }, [])

      const handleClick = () => {
        setDarkMode(!darkMode)
        document.querySelector('.pricing-toggle-circle').classList.toggle('pricing-toggle-circle-annual')
        
        document.querySelectorAll('.pricing-price')
        .forEach((price)=>
        price.classList.toggle('pricing-price-animate'))
    }
  
    return (
        <div className={darkMode ? 'comment-section-container df comment-section-dark' : 'comment-section-container df'}>
            <a className="comment-section-logo" href="https://frontendmentor-showcase.netlify.app/" target="_blank">👾</a>

            {/* // COPIED TOGGLE FROM ANOTHER, OLDER UNCHANGED PROJECT */}
            <div className="pricing-options comment-section-toggle">
                        {/* // THIS SHOULD BE NORMALLY A BUTTON  */}
                        <div className="pricing-toggle" onClick={handleClick}>
                            <div className="pricing-toggle-circle"></div>
                        </div>
            </div>
            {isLoading 
               ? 
              <div className="comment-section-spinner"></div>
              : 
              <>
              <SwitchAccount  users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
             <main className="comment-section-main">
             <h1 className='sr-only'>Comments Page</h1>
                <section className='comment-section-section'>
                    <UserContext.Provider value={currentUser}>
                        <CommentsContext.Provider value={[comments, setComments]}>
                        <Comments comments={comments} ></Comments>
                        <AddComment comments={comments} setComments={setComments}/>
                        </CommentsContext.Provider>
                    </UserContext.Provider>
                </section>
              </main>
              </>
              
            }
        </div>
    )
}

export default CommentSection
