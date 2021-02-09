export const addItemToCart = (cartItems, cartItemToAdd) => {
    // .find() returns the value of the first element in the provided array that satisfies the provided testing function
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); // will be undefined if it finds nothing

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem);
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}