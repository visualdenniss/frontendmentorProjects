import React, {useState} from 'react'
import Comment from './Comment/Comment'
import Replies from './Replies/Replies'
import './CommentItem.css'

const CommentItem = ({comment}) => {

    const [isReplying, setIsReplying] = useState(false)
    const [replyingToID, setReplyingToID] = useState("")
   
    return (
        <li className="comment-section-comment-item">

            <Comment 
            isReplying={isReplying} 
            setIsReplying={setIsReplying} 
            setReplyingToID={setReplyingToID} 
            data={comment}/>

            {/* When replying to brand new comment with no replies yet:  */}

            {isReplying && comment?.replies?.length === 0 && 
            <Replies 
            replyingToID={replyingToID} 
            isReplying={isReplying} 
            setIsReplying={setIsReplying}/>}

            {comment?.replies?.length > 0 && 
            <Replies 
            setReplyingToID={setReplyingToID} 
            replyingToID={replyingToID} 
            isReplying={isReplying} 
            setIsReplying={setIsReplying} 
            replies={comment.replies}/>}
        </li>
    )
}

export default CommentItem
