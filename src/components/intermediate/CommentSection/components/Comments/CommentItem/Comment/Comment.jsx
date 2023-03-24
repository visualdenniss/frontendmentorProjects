import React, {useState, useContext} from 'react'
import { icons } from './icons.js'
import { UserContext } from '../../../../context/UserContext.js'
import { CommentsContext } from '../../../../CommentSection.jsx'

const {plus, minus, edit, deleteIcon, reply} = icons

const Comment = ({data, type, isReplying, setIsReplying, setReplyingToID}) => {

    const currentUser = useContext(UserContext)
    
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(data?.content)
    const [comments, setComments] = useContext(CommentsContext)

    const [hasVoted, setHasVoted] = useState([])

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleDelete = () => {
        // DELETE COMMENT
        if (comments.find((comment) => comment.id === data.id)) {
            const updatedComments = comments.filter((comment)=> comment.id !== data.id) 
            setComments(updatedComments)
        }
        // DELETE REPLY
        else {

          const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === data.id))
          const commentIndex = comments.indexOf(commentToUpdate);

          const updatedReplies = commentToUpdate.replies.filter(reply => reply.id !== data.id);

        //   const updatedComments = [...comments];
        //   updatedComments[commentIndex].replies = updatedReplies
        //   setComments(updatedComments)

          const updatedComment = { ...commentToUpdate, replies: updatedReplies };
          const updatedComments = [...comments];
          updatedComments[commentIndex] = updatedComment;
          setComments(updatedComments);
          

        }
    }

    const handleUpdate = (e, id) => {
        e.preventDefault()

        // We first check if the id belongs to the main comment, if so then simply update it. 
        if (comments.find((comment) => comment.id === id)) {
            const commentToUpdate = comments.find((comment) => comment.id === id);
            const commentIndex = comments.indexOf(commentToUpdate);

            const updatedComments = [...comments];
            updatedComments[commentIndex] = { ...commentToUpdate, content: editedContent };
            setComments(updatedComments)
        } 

        // Otherwise we know it must be a reply id, so we update the reply. 

        else {

            const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === id));
            const replyToUpdate = commentToUpdate.replies.find(reply => reply.id === id);
    
            const commentIndex = comments.indexOf(commentToUpdate);
            const replyIndex = commentToUpdate.replies.indexOf(replyToUpdate);
    
            const updatedComments = [...comments];
            updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, content: editedContent};
            setComments(updatedComments)
        }

        setIsEditing(false)

    }


    const handleVote = (direction) => {

        if(direction === 'upvote') {
            // We first check if the id belongs to the main comment, if so then simply update it. 
            if (comments.find((comment) => comment.id === data.id)) {
                const commentToUpdate = comments.find((comment) => comment.id === data.id);
                const commentIndex = comments.indexOf(commentToUpdate);
    
                const updatedComments = [...comments];

                //check if user has voted already: 
                if(hasVoted.find((vote)=>vote.id === currentUser.id)?.voted ) {
                    updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 1 }
                    const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                    setHasVoted(newHasVoted)
                    
                }
                 else {
                    updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score + 1 }
                    setHasVoted([...hasVoted,
                        {
                            id: currentUser.id, 
                            voted: true, 
                        }
                    ])

                 }
         
    
                setComments(updatedComments)

            }   
            
            // Otherwise we know it must be a reply id, so we update the reply. 
            
            else {

                const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === data.id));
                const replyToUpdate = commentToUpdate.replies.find(reply => reply.id === data.id);
        
                const commentIndex = comments.indexOf(commentToUpdate);
                const replyIndex = commentToUpdate.replies.indexOf(replyToUpdate);
        
                const updatedComments = [...comments];
                updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score + 1};
                setComments(updatedComments)
            }


        } else {

            // We first check if the id belongs to the main comment, if so then simply update it. 
            if (comments.find((comment) => comment.id === data.id)) {
                const commentToUpdate = comments.find((comment) => comment.id === data.id);
                const commentIndex = comments.indexOf(commentToUpdate);
    
                const updatedComments = [...comments];
                updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 1 };
                setComments(updatedComments)
            }   
            
            // Otherwise we know it must be a reply id, so we update the reply. 
            
            else {

                const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === data.id));
                const replyToUpdate = commentToUpdate.replies.find(reply => reply.id === data.id);
        
                const commentIndex = comments.indexOf(commentToUpdate);
                const replyIndex = commentToUpdate.replies.indexOf(replyToUpdate);
        
                const updatedComments = [...comments];
                updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score - 1};
                setComments(updatedComments)
            }


        }

    }


    const handleReply = () => {
        setIsReplying(!isReplying)
        setReplyingToID(data?.id)
    }

    return (
        <div className='comment-section-comment'>
            <div className="comment-section-comment-left">
                <div className="comment-section-comment-counter">
                    <button disabled={currentUser.username === data?.user.username && true} onClick={()=> handleVote('upvote')}><img src={plus} alt="" /></button>
                    <p>{data?.score}</p>
                    <button  disabled={currentUser.username === data?.user.username && true} onClick={()=> handleVote('downvote')}><img src={minus} alt="" /></button>
                </div>
            </div>
            <div className="comment-section-comment-right">
                <div className="comment-section-comment-header">
                    <div className="comment-section-comment-details">
                        <img src={data?.user.image.png} alt="" />
                        <a href="">{data?.user.username}</a>
                        {currentUser.username === data?.user.username && <span>you</span>}
                        <p>{data?.createdAt}</p>
                    </div>
                    <div className="comment-section-comment-right-buttons">

                        {currentUser.username === data?.user.username ? 
                        <>
                        <button onClick={handleDelete} style={{color: 'var(--comment-section-Soft-Red)'}}><img src={deleteIcon} alt="" />Delete</button>
                        <button onClick={handleEdit}><img src={edit} alt="" />Edit</button>
                        </> 
                        :                        
                        <button onClick={()=> handleReply()}><img src={reply} alt="" />Reply</button>
                        }

                    </div>
                </div>

                {isEditing ?  
                <textarea className="comment-section-comment-editing-field"
                value={editedContent}
                onChange={(e)=> setEditedContent(e.target.value)}
                />
                 : 
                <p className="comment-section-comment-body">

                {type === reply && Array.isArray(data.replyingTo) ? 
                    data.replyingTo.map((reply) => <a className='comment-section-replying-to comment-section-replying-to-multi' href="#">@{reply}</a>) 
                    : <a className='comment-section-replying-to' href="#">{data.replyingTo && '@'}{data?.replyingTo}</a> 
                }

                {data?.content}
                </p>
                }

                {isEditing && 
                <button onClick={(e)=> handleUpdate(e, data.id)} className='comment-section-editing-btn'>update</button>
                }
            </div>
        </div>
    )
}

export default Comment
