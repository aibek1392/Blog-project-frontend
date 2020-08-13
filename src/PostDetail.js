import React from 'react'

const PostDetail = ({props, content, title, date}) => {
    
    return (
        <div className='comment'>
            <div className='content'>
                <a href='/' className='author'>
                    {content}
                </a>
                <div className='metadata'>
                    <span className='date'>{date}</span>
                </div>
                <div className='text'>{title}</div>
            </div>
        </div>
    )
}

export default PostDetail;