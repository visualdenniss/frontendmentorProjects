import React from 'react'
import './AddComment.css'
import avatar from '../../assets/interactive-comments-section-main/images/avatars/image-maxblagun.png'

const AddComment = ({replying}) => {
    return (
        <form className={replying ? 'comment-section-add-comment-form-reply comment-section-add-comment-form' : 'comment-section-add-comment-form'}>
            <img src={avatar} alt="" />
            <textarea placeholder="Add a comment..." name="" id="" resize="false"></textarea>
            <button>{replying ? 'reply' : 'send'}</button>
        </form>
    )
}

export default AddComment
