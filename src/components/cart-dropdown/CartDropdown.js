import React from 'react';
import './cartDropdown.scss';
import CustomButton from '../custom-button/CustomButton';

const cartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {cartItems.map(item => 
                <div>{item.name}</div>
            )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default cartDropdown;
