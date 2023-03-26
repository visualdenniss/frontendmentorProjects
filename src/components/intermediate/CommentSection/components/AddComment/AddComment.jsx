import React, {useState, useContext} from 'react'
import './AddComment.css'
import { UserContext } from '../../context/UserContext'
import { v4 as uuidv4 } from 'uuid';

const AddComment = ({isReplying, setIsReplying, comments, setComments, replyingToID}) => {

    const [content, setContent] = useState("")

    const currentUser = useContext(UserContext);

    const handleComment = (e) => {
        e.preventDefault()
        if(isReplying) {

            // REPLYING TO A COMMENT DIRECTLY 
            if(comments.find((comment) => comment.id === replyingToID)) {
                const commentToUpdate = comments.find((comment) => comment.id === replyingToID);
                const commentIndex = comments.indexOf(commentToUpdate);
                const replyingTo = commentToUpdate.user.username
                const existingReplies = commentToUpdate.replies || [];
                const updatedReplies = [...existingReplies, { 
                    id: uuidv4(),
                    content: content,  
                    createdAt: "less than a minute ago",
                    score: 0,
                    replyingTo,
                    user: {
                image: { 
                    png: currentUser.image.png,
                    webp: currentUser.image.webp, 
                    },
                    username: currentUser.username
                    }
    
                }];
            const updatedComments = [...comments];
            updatedComments[commentIndex] = { ...commentToUpdate, replies: updatedReplies };
            setComments(updatedComments);
            setContent("")
            setIsReplying(false)
            }

            // REPLYING TO A REPLY DIRECTLY 
            else {

                const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === replyingToID));
                const commentIndex = comments.indexOf(commentToUpdate); 
                const replyToUpdate = commentToUpdate.replies.find(reply => reply.id === replyingToID);

                const replyingTo = [commentToUpdate.user.username,replyToUpdate.user.username ]

                const existingReplies = commentToUpdate.replies || [];

                const updatedReplies = [...existingReplies, { 
                    id: uuidv4(),
                    content: content,  
                    createdAt: "2 weeks ago",
                    score: 0,
                    replyingTo,
                    user: {
                image: { 
                    png: currentUser.image.png,
                    webp: currentUser.image.webp, 
                    },
                    username: currentUser.username
                    }
    
                }];

                const updatedComments = [...comments];
                updatedComments[commentIndex] = { ...commentToUpdate, replies: updatedReplies };
                setComments(updatedComments);
                setContent("")
                setIsReplying(false)
            }

        }

        else {


            // ADDING A NEW COMMENT
                setComments([
                    ...comments, 
                    {
                    id: uuidv4(),
                    content: content,  
                    createdAt: "2 weeks ago",
                    score: 0,
                    replies: [], 
                    user: {
                image: { 
                    png: currentUser.image.png,
                    webp: currentUser.image.webp, 
                    },
                    username: currentUser.username
                    }
                    },
                ])
                setContent("")
        }
    }


    return (
        <form  className={isReplying ? 'comment-section-add-comment-form-reply comment-section-add-comment-form' : 'comment-section-add-comment-form'}>
            <picture>
                    <source srcSet={currentUser.image.png.webp} type="image/webp" />
                    <source srcSet={currentUser.image.png.png} type="image/png" />
                    <img src={currentUser.image.png} alt={currentUser.username} />
            </picture>            
            <textarea placeholder="Add a comment..." value={content} onChange={(e)=> setContent(e.target.value)} resize="false"></textarea>
            <button onClick={handleComment}>{isReplying ? 'reply' : 'send'}</button>
        </form>
    )
}

export default AddComment
