import  * as cartActionTypes from './cartActions';

const initialState = [];

const carts = (state= initialState, action) => {
    var alreadyExists = false;
    var {product} = action;
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            state.forEach((x) => {    
              if (x.menuId === product.menuId) {
                alreadyExists = true;
                x.quantity++;
              }
            });
            if (!alreadyExists) {
              state.push({ ...product, quantity: 1 });
            }
            console.log(state);
            return [...state];
        case cartActionTypes.REMOVE_TO_CART:
            //console.log(action);
            return state.filter(cart => cart.menuId !== action.payload.menuId);
        default:
            return state;
    }
}


export default carts