import React from 'react'
import './CommentSection.css'
import AddComment from './components/AddComment/AddComment'
import Comments from './components/Comments/Comments'

const CommentSection = () => {
    return (
        <div className='comment-section-container df'>
            <main className="comment-section-main">
            <h1 className='sr-only'>Comments Page</h1>
                <section className='comment-section-section'>
                    <Comments></Comments>
                    <AddComment/>
                </section>
            </main>
        </div>
    )
}

export default CommentSection
