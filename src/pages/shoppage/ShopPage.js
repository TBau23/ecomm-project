import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => (
    
        // can map over collections - it is an array of objects, with each object being a collection category

    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);