import React, {useState, useEffect,createContext} from 'react'
import './CommentSection.css'
import './Loader.css'
import AddComment from './components/AddComment/AddComment'
import Comments from './components/Comments/Comments'
import axios from 'axios'



import {UserContext}  from './context/UserContext'
import SwitchAccount from './SwitchAccount'

export const CommentsContext = createContext(null);

const users = [
    
    {
    id: 0, 
    image: { 
        png: "https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-juliusomo_doq3dh.png",
        webp: "https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-juliusomo_josf9c.webp"
      },
      username: "juliusomo"
    },
    {
    id: 1, 
    image: { 
        png: "https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-amyrobson_xkvk0b.png",
        webp:  "https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-amyrobson_fozexc.webp"
      },
      username: "amyrobson"
    },
    {
    id: 2,     
    image: { 
        png:"https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-maxblagun_ecp1ug.webp",
        webp:"https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-maxblagun_ecp1ug.webp"
      },
      username: "maxblagun"
    },
    {
    id: 3,     
    image: { 
        png:  "https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-ramsesmiron_cfndbf.png",
        webp: "https://res.cloudinary.com/dg7sswqcr/image/upload/v1679585456/comments-section-fm/image-ramsesmiron_mxxtzx.webp"
      },
      username: "ramsesmiron"
    },


]

const CommentSection = () => {

    const [currentUser, setCurrentUser] = useState(users[0])
    const [comments, setComments] = useState("")
    const [isLoading, setIsLoading] = useState(false)


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
  

    const emojiStyle = {
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        textDecoration: 'none',
        fontSize: '3rem',
        lineHeight: '.75',
    }

    return (
        <div className='comment-section-container df'>
            <a href="https://frontendmentor-showcase.netlify.app/" target="_blank" style={emojiStyle}>👾</a>
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
