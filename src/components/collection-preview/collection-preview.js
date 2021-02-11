import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item';
import { Route } from 'react-router-dom';


const CollectionPreview = ({title, items}) => { 

    
    return(
    <div className='collection-preview'>
        <Route className='title'>{title.toUpperCase()}</Route>
        <div className='preview'>

            {items.filter((item, idx) => idx < 4).map((item) => (
                <CollectionItem key={item.id} item={item}/>

            ))}

        </div>
    </div>
    )
};

export default CollectionPreview



