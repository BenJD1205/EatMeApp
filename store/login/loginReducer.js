import * as actionLoginTypes from './loginActions';

const initialState = [{
    email: "ben@gmail.com",
    password:"123456"
}]

const loginReducer = (state = initialState,action) => {
    switch (action.type) {
        case actionLoginTypes.LOGIN_SUCCESS:
            return state.map(user =>{
                if(user.email === action.payload.email && user.password === action.payload.password){
                    console.log("You are logged in")
                }
            })
        case actionLoginTypes.LOGOUT:
            return state.email = null
        default:
            return state;
    }
}

export default loginReducer