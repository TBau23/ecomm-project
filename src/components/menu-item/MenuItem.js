import React from 'react';
import './menu-item.styles.scss'
import { useHistory, withRouter } from 'react-router-dom'

const MenuItem = (props) => {
    const {section} = props;
    let history = useHistory()

    return(
        <div className={`${section.size} menu-item`} onClick={() => history.push(`${props.match.url}${section.linkUrl}`)} >
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


export default withRouter(MenuItem);
