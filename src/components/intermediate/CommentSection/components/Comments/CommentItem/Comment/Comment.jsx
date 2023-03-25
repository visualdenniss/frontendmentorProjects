import React, {useState, useContext} from 'react'
import { icons } from './icons.js'
import { UserContext } from '../../../../context/UserContext.js'
import { CommentsContext } from '../../../../CommentSection.jsx'
import Modal from './Modal.jsx'

const {plus, minus, edit, deleteIcon, reply} = icons

const Comment = ({data, type, isReplying, setIsReplying, setReplyingToID}) => {

    const currentUser = useContext(UserContext)
    const [comments, setComments] = useContext(CommentsContext)
    
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(data?.content)
    const [hasVoted, setHasVoted] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const handleReply = () => {
        setIsReplying(!isReplying)
        setReplyingToID(data?.id)
    }

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleDelete = () => {
        setOpenModal(true)
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
                if(hasVoted.find((vote)=> vote.id === currentUser.id)?.voted) {

                    // User has voted up and clicks on vote up again
                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)
                    if (vote.direction === 'up') {
                        // score -1
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted down, and clicks on vote up
                    else if (vote.direction === 'down') {
                        // score +2
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score + 2 }
                        //Update voted: true, direction: up.
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'up'}

                        setHasVoted(updatedVotes)
                    }
                    
                }

                // User has not voted yet, and votes up
                 else {
                    // score +1
                    updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score + 1 }
                    // voted: true, direction: up,
                    setHasVoted([...hasVoted,
                        {
                            id: currentUser.id, 
                            voted: true,
                            direction: 'up',
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

                //check if user has voted already: 
                if(hasVoted.find((vote)=>vote.id === currentUser.id)?.voted ) {

                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)

                    // User has voted up and clicks on vote up again
                    if (vote.direction === 'up') {
                        // score -1
                     updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score - 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted down, and clicks on vote up
                    else if (vote.direction === 'down') {
                        // score +2
                        updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score + 2 }
                        //Update voted: true, direction: up.
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'up'}

                        setHasVoted(updatedVotes)
                    }
                    
                }

                // User has not voted yet, and votes up
                 else {
                     //score +1
                    updatedComments[commentIndex].replies[replyIndex]  = { ...replyToUpdate, score: replyToUpdate.score + 1 }
                    // voted: true, direction: up,
                    setHasVoted([...hasVoted,
                        {
                            id: currentUser.id, 
                            voted: true,
                            direction: 'up'
                        }
                    ])

                 }
                setComments(updatedComments)
            }


        } 
        
        
        // DOWNVOTECASE
        
        else {

            // We first check if the id belongs to the main comment, if so then simply update it. 
            if (comments.find((comment) => comment.id === data.id)) {
                const commentToUpdate = comments.find((comment) => comment.id === data.id);
                const commentIndex = comments.indexOf(commentToUpdate);

                const updatedComments = [...comments];

                //check if user has voted already: 
                if(hasVoted.find((vote)=> vote.id === currentUser.id)?.voted) {

                    // User has voted down and clicks on vote down again
                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)
                    if (vote.direction === 'down') {
                        // score +1
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score + 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted up and click on downvote
                    else if (vote.direction === 'up') {
                        // score -2
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 2 }
                        //Update voted: true, direction: down.        
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'down'}

                        setHasVoted(updatedVotes)
                    }
                    
                }                

                 //User has not voted yet, and votes down
                 else {
                    updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 1 }
                    setHasVoted([...hasVoted,
                        {
                            id: currentUser.id, 
                            voted: true,
                            direction: 'down',
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

                //check if user has voted already: 
                if(hasVoted.find((vote)=>vote.id === currentUser.id)?.voted ) {

                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)

                    // User has voted down, and clicks on vote down again
                    if (vote.direction === 'down') {
                        // score +1
                     updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score + 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted up and click on downvote
                    else if (vote.direction === 'up') {
                        //  score -2
                        updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score - 2 }
                        //voted: true, direction: down
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'down'}

                        setHasVoted(updatedVotes)
                    }
                    
                }

                // User has not voted yet, and votes down
                else {
                    //score -1
                   updatedComments[commentIndex].replies[replyIndex]  = { ...replyToUpdate, score: replyToUpdate.score - 1 }
                   // voted: true, direction: down
                   setHasVoted([...hasVoted,
                       {
                           id: currentUser.id, 
                           voted: true,
                           direction: 'down'
                       }
                   ])

                }
               setComments(updatedComments)                
            }

        }

    }

    let markVoted;
    if(hasVoted.find((vote)=> vote.id === currentUser.id)) {
        const vote = hasVoted.find((vote)=> vote.id === currentUser.id )
        vote.direction === 'up' ? markVoted = 'up' : markVoted = 'down'
    }

    return (
        <div className='comment-section-comment'>
            <div className="comment-section-comment-left">
                <div className="comment-section-comment-counter">
                    <button disabled={currentUser.username === data?.user.username && true} onClick={()=> handleVote('upvote')}><img className={markVoted === 'up' && 'comment-section-voted'} src={plus} alt="" /></button>
                    <p>{data?.score}</p>
                    <button  disabled={currentUser.username === data?.user.username && true} onClick={()=> handleVote('downvote')}><img className={markVoted === 'down' && 'comment-section-voted'} src={minus} alt="" /></button>
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

                    {type === 'reply' && Array.isArray(data.replyingTo) && data.replyingTo.length > 0 ? 
                    data.replyingTo.map((reply) => <a className='comment-section-replying-to comment-section-replying-to-multi' href="#">@{reply}</a>) 
                    : data.replyingTo ? <a className='comment-section-replying-to' href="#">@{data?.replyingTo}</a> : null 
                    }
                    
                    {data?.content}
                    
                </p>
                }

                {isEditing && 
                <button onClick={(e)=> handleUpdate(e, data.id)} className='comment-section-editing-btn'>update</button>
                }
            </div>
  
            {openModal && 
            <Modal 
            comments={comments}
            setComments={setComments}
            setOpenModal={setOpenModal}
            id={data.id}            
            />
            }
        
        </div>
    )
}

export default Comment
