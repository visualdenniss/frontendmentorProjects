// THIS IS THE FIRST INITIAL BUGFREE WORKING VERSION 
// KEEPING THIS COPY, IN ORDER TO EXPERIMENT WITH POSSIBLE REFACTORINGS


import React from 'react'

const Vote = ({data, currentUser, comments, hasVoted, setHasVoted, setComments, plus, minus }) => {

    const handleVote = (direction) => {

        if(direction === 'upvote') {
            // We first check if the id belongs to the main comment, if so then simply update it. 
            if (comments.find((comment) => comment.id === data.id)) {


                const commentToUpdate = comments.find((comment) => comment.id === data.id);
                const commentIndex = comments.indexOf(commentToUpdate);
    
                const updatedComments = [...comments];

                //check if user has voted already: 
                if(hasVoted.find((vote)=> vote.id === currentUser.id)?.voted) {

                    // User has voted up and clicks on vote up again
                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)
                    if (vote.direction === 'up') {
                        // score -1
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted down, and clicks on vote up
                    else if (vote.direction === 'down') {
                        // score +2
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score + 2 }
                        //Update voted: true, direction: up.
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'up'}

                        setHasVoted(updatedVotes)
                    }
                    
                }

                // User has not voted yet, and votes up
                 else {
                    // score +1
                    updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score + 1 }
                    // voted: true, direction: up,
                    setHasVoted([...hasVoted,
                        {
                            id: currentUser.id, 
                            voted: true,
                            direction: 'up',
                        }
                    ])

                 }
                setComments(updatedComments)
            }   

            // Otherwise we know it must be a reply id, so we update the reply. 
            
            else {

                const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === data.id));
                const replyToUpdate = commentToUpdate.replies.find(reply => reply.id === data.id);
        
                const commentIndex = comments.indexOf(commentToUpdate);
                const replyIndex = commentToUpdate.replies.indexOf(replyToUpdate);

                const updatedComments = [...comments];

                //check if user has voted already: 
                if(hasVoted.find((vote)=>vote.id === currentUser.id)?.voted ) {

                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)

                    // User has voted up and clicks on vote up again
                    if (vote.direction === 'up') {
                        // score -1
                     updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score - 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted down, and clicks on vote up
                    else if (vote.direction === 'down') {
                        // score +2
                        updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score + 2 }
                        //Update voted: true, direction: up.
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'up'}

                        setHasVoted(updatedVotes)
                    }
                    
                }

                // User has not voted yet, and votes up
                 else {
                     //score +1
                    updatedComments[commentIndex].replies[replyIndex]  = { ...replyToUpdate, score: replyToUpdate.score + 1 }
                    // voted: true, direction: up,
                    setHasVoted([...hasVoted,
                        {
                            id: currentUser.id, 
                            voted: true,
                            direction: 'up'
                        }
                    ])

                 }
                setComments(updatedComments)
            }
        } 
        
        
        // DOWNVOTECASE
        
        else {

            // We first check if the id belongs to the main comment, if so then simply update it. 
            if (comments.find((comment) => comment.id === data.id)) {
                const commentToUpdate = comments.find((comment) => comment.id === data.id);
                const commentIndex = comments.indexOf(commentToUpdate);

                const updatedComments = [...comments];

                //check if user has voted already: 
                if(hasVoted.find((vote)=> vote.id === currentUser.id)?.voted) {

                    // User has voted down and clicks on vote down again
                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)
                    if (vote.direction === 'down') {
                        // score +1
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score + 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted up and click on downvote
                    else if (vote.direction === 'up') {
                        // score -2
                        updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 2 }
                        //Update voted: true, direction: down.        
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'down'}

                        setHasVoted(updatedVotes)
                    }
                    
                }                

                 //User has not voted yet, and votes down
                 else {
                    updatedComments[commentIndex] = { ...commentToUpdate, score: commentToUpdate.score - 1 }
                    setHasVoted([...hasVoted,
                        {
                            id: currentUser.id, 
                            voted: true,
                            direction: 'down',
                        }
                    ])

                 }
                setComments(updatedComments)               

            }   
            
            // Otherwise we know it must be a reply id, so we update the reply. 
            
            else {


                const commentToUpdate = comments.find(comment => comment.replies.find(reply => reply.id === data.id));
                const replyToUpdate = commentToUpdate.replies.find(reply => reply.id === data.id);
        
                const commentIndex = comments.indexOf(commentToUpdate);
                const replyIndex = commentToUpdate.replies.indexOf(replyToUpdate);

                const updatedComments = [...comments];

                //check if user has voted already: 
                if(hasVoted.find((vote)=>vote.id === currentUser.id)?.voted ) {

                    const vote = hasVoted.find((vote)=> vote.id === currentUser.id)

                    // User has voted down, and clicks on vote down again
                    if (vote.direction === 'down') {
                        // score +1
                     updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score + 1 }
                        // remove from vote object.
                        const newHasVoted = hasVoted.filter((vote)=>vote.id !== currentUser.id)
                        setHasVoted(newHasVoted)
                    }
                    // User has voted up and click on downvote
                    else if (vote.direction === 'up') {
                        //  score -2
                        updatedComments[commentIndex].replies[replyIndex] = { ...replyToUpdate, score: replyToUpdate.score - 2 }
                        //voted: true, direction: down
                        const voteToUpdate = hasVoted.find((vote)=>vote.id == currentUser.id)
                        const voteIndex = hasVoted.indexOf(voteToUpdate)

                        const updatedVotes = [...hasVoted]
                        updatedVotes[voteIndex] = {...voteToUpdate, direction: 'down'}

                        setHasVoted(updatedVotes)
                    }
                    
                }

                // User has not voted yet, and votes down
                else {
                    //score -1
                   updatedComments[commentIndex].replies[replyIndex]  = { ...replyToUpdate, score: replyToUpdate.score - 1 }
                   // voted: true, direction: down
                   setHasVoted([...hasVoted,
                       {
                           id: currentUser.id, 
                           voted: true,
                           direction: 'down'
                       }
                   ])

                }
               setComments(updatedComments)                
            }

        }
    }

    let markVoted;
    if(hasVoted.find((vote)=> vote.id === currentUser.id)) {
        const vote = hasVoted.find((vote)=> vote.id === currentUser.id )
        vote.direction === 'up' ? markVoted = 'up' : markVoted = 'down'
    }

    return (
        <div className="comment-section-comment-counter">
        <button disabled={currentUser.username === data?.user.username && true} onClick={()=> handleVote('upvote')}><img className={markVoted === 'up' && 'comment-section-voted'} src={plus} alt="" /></button>
        <p>{data?.score}</p>
        <button  disabled={currentUser.username === data?.user.username && true} onClick={()=> handleVote('downvote')}><img className={markVoted === 'down' && 'comment-section-voted'} src={minus} alt="" /></button>
    </div>
    )
}

export default Vote
