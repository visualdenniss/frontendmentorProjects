import React, {useState} from 'react'
import Comment from './Comment/Comment'
import Replies from './Replies/Replies'
import './CommentItem.css'

const CommentItem = () => {
    return (
        <li className="comment-section-comment-item">
            {/* Comment Item Containing the main Comment and replies to it: */}
            <Comment ></Comment>
            <Replies ></Replies>
        </li>
    )
}

export default CommentItem
