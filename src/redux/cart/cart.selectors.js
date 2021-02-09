import {  createSelector } from 'reselect';

// two types of selectors - input and output

const selectCart = state => state.cart; // returns slice of state

// using create selector makes this automatically memoized
export const selectCartItems = createSelector(
    [selectCart], //collection of input selectors
    (cart) => cart.cartItems

);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulator, cartItem) => 
        accumulator + cartItem.quantity , 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);