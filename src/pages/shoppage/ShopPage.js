import React from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state; // can map over collections - it is an array of objects, with each object being a collection category
        
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage