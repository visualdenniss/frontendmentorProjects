import React, {useState} from 'react'
import AddComment from '../../../AddComment/AddComment'
import Reply from './Reply/Reply'

const Replies = () => {
    const [replying, setReplying] = useState(true)
    return (
        <ul className='comment-section-replies-list'>
            {/* Replies:  */}
            <Reply></Reply>
            {/* <Reply></Reply> */}
            <AddComment replying={replying}></AddComment>
            {/* <Reply></Reply> */}
        </ul>
    )
}

export default Replies
