import React from 'react'
import CommentItem from './CommentItem/CommentItem'
import './Comments.css'

const Comments = () => {
    return (
        <ul className='comment-section-comments'>
            {/* for each comment comments.map(li) */}
            <CommentItem></CommentItem>
            {/* <CommentItem></CommentItem> */}
        </ul>
    )
}

export default Comments
