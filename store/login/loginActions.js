export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const Login = (email,password) => ({
    type:LOGIN_SUCCESS,
    payload: {email,password}
})

export const Logout = () => ({
    type:LOGOUT,
})