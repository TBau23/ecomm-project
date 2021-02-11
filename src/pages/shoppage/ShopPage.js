import React from 'react';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collectionPage/CollectionPage';

const ShopPage = ({match}) => {
    
    return (    
    // route automatically passes match, history, and location into any component wrapped in one
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
    )
}


export default ShopPage;