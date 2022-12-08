import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='df' style={{height:'100vh'}}>
            <div style={{display:'flex',flexDirection:'column'}}>
           <p style={{fontSize:'2em'}}>404 NOT FOUND</p>
            <Link to='/'>
            <button className="app-main-item-btn">Back to Home <i class="bi bi-arrow-right"></i></button>
            </Link>
            </div>
        
        </div>
    )
}

export default Error
