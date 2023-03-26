import React from 'react'
import {motion} from 'framer-motion'
import { basicFadeIn, basicFadeUpProfile } from '../../../../animation'


const Modal = ({setOpenModal, comments, setComments, id}) => {

    const onDelete = () => {
        // DELETE COMMENT
        if (comments.find((comment) => comment.id === id)) {
            const updatedComments = comments.filter((comment)=> comment.id !== id) 
            setComments(updatedComments)
        }
        // DELETE REPLY
        else {

          const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === id))
          const commentIndex = comments.indexOf(commentToUpdate);

          const updatedReplies = commentToUpdate.replies.filter(reply => reply.id !== id);

        //   const updatedComments = [...comments];
        //   updatedComments[commentIndex].replies = updatedReplies
        //   setComments(updatedComments)

          const updatedComment = { ...commentToUpdate, replies: updatedReplies };
          const updatedComments = [...comments];
          updatedComments[commentIndex] = updatedComment;
          setComments(updatedComments);
        }
        setOpenModal(false)
    }

    return (
        <div className="comment-section-delete-modal-container">
        <motion.div {...basicFadeIn} className="comment-section-delete-modal-overlay"></motion.div>
        <motion.div {...basicFadeUpProfile} className="comment-section-delete-modal">
            <h2>Delete comment</h2>
            <p>Are you sure you want to delete this comment? 😱 This will remove the comment and can't be undone. Like never ever. 😈</p>
        <div className="comment-section-delete-modal-btns">
        <button onClick={()=>setOpenModal(false)} className='comment-section-cancel-delete-btn'>Please, Don't</button>
        <button onClick={onDelete} className='comment-section-delete-btn'>Yes, Delete</button>
        </div>
        </motion.div>
    </div>
    )
}

export default Modal
