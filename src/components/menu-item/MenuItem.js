import React from 'react';
import './menu-item.styles.scss'

const MenuItem = (props) => {
    const {section} = props;

    return(
        <div className={`${section.size} menu-item`}>
            <div 
            className='background-image'
            style={{
                backgroundImage: `url(${section.imageUrl})`
            }}
            />
            <div className='content'>
                <h1 className='title'>{section.title.toUpperCase()}</h1>
                <span>Shop Now</span>
            </div>
        </div>
    )
};


export default MenuItem
