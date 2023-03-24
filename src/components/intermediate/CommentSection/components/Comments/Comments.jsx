import React from 'react'
import CommentItem from './CommentItem/CommentItem'
import './Comments.css'


const Comments = ({comments}) => {

    return (
        <ul className='comment-section-comments'>
            {comments && comments?.map((comment, index)=>{
                return  <CommentItem key={index} comment={comment}></CommentItem>
            })}
        </ul>
    )
}

export default Comments
