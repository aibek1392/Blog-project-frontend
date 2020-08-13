import React from 'react'

const NiceFrame = (props) => {
    return (
        <div className='ui card'>
            <div className='content'>{props.children}</div>
            <div className='extra content'>
            </div>
        </div>
    )
};

export default NiceFrame;

