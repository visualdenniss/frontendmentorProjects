import React, {useContext} from 'react'
import AddComment from '../../../AddComment/AddComment'
import Reply from './Reply/Reply'
import { CommentsContext } from '../../../../CommentSection'

const Replies = ({replies, isReplying ,setIsReplying, replyingToID, setReplyingToID}) => {


    const [comments, setComments] = useContext(CommentsContext)

    return (
        <ul className='comment-section-replies-list'>
            {replies?.map((reply, index)=> <Reply 
            key={index} 
            isReplying={isReplying} 
            setReplyingToID={setReplyingToID}
            setIsReplying={setIsReplying} 
            reply={reply}/>)}

            {isReplying && 
            <AddComment 
            replyingToID={replyingToID} 
            isReplying={isReplying}
            comments={comments} 
            setIsReplying={setIsReplying}
            setComments={setComments}
            ></AddComment>}
        </ul>
    )
}

export default Replies
