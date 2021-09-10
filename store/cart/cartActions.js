export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART'

export const addToCart = (product) => ({
    type:ADD_TO_CART,
    product
})

export const removeToCart = (product) => ({
    type:REMOVE_TO_CART,
    payload:product
})

