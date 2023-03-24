import React from 'react'
import Comment from '../../Comment/Comment'

const Reply = ({reply, setIsReplying, isReplying, setReplyingToID}) => {
    return (
        <li>
            <Comment 
            data={reply} 
            isReplying={isReplying} 
            setReplyingToID={setReplyingToID} 
            setIsReplying={setIsReplying} 
            type="reply"/>
        </li>
    )
}

export default Reply
