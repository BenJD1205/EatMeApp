import { combineReducers } from "redux";
import cartReducer from './cart/cartReducer';
import loginReducer from './login/loginReducer';
export default combineReducers({
    cart:cartReducer,
    login:loginReducer
})
