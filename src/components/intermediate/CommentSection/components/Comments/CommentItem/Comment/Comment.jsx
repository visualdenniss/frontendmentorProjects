import React, {useState} from 'react'
import avatar from '../../../../assets/interactive-comments-section-main/images/avatars/image-amyrobson.png'
import { icons } from './icons.js'

const {plus, minus, edit, deleteIcon, reply} = icons

const Comment = () => {
    const [isSelf, setIsSelf] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    return (
        <div className='comment-section-comment'>
            <div className="comment-section-comment-left">
                <div className="comment-section-comment-counter">
                    <button><img src={plus} alt="" /></button>
                    <p>12</p>
                    <button><img src={minus} alt="" /></button>
                </div>
            </div>
            <div className="comment-section-comment-right">
                <div className="comment-section-comment-header">
                    <div className="comment-section-comment-details">
                        <img src={avatar} alt="" />
                        <a href="">amyrobson</a>
                        {isSelf && <span>you</span>}
                        <p>1 month ago</p>
                    </div>
                    <div className="comment-section-comment-right-buttons">

                        {isSelf ? 
                        <>
                        <button style={{color: 'var(--comment-section-Soft-Red)'}}><img src={deleteIcon} alt="" />Delete</button>
                        <button><img src={edit} alt="" />Edit</button>
                        </> 
                        :                        
                        <button><img src={reply} alt="" />Reply</button>
                        }

                    </div>
                </div>

                {isEditing ?  
                <textarea className="comment-section-comment-editing-field">
                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well
                </textarea>
                 : 
                <p className="comment-section-comment-body">
                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well
                </p>
                }

                {isEditing && 
                <button className='comment-section-editing-btn'>update</button>
                }
            </div>
        </div>
    )
}

export default Comment
