"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logout = exports.Login = exports.LOGOUT = exports.LOGIN_SUCCESS = void 0;
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
var LOGOUT = 'LOGOUT';
exports.LOGOUT = LOGOUT;

var Login = function Login(email, password) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      email: email,
      password: password
    }
  };
};

exports.Login = Login;

var Logout = function Logout() {
  return {
    type: LOGOUT
  };
};

exports.Logout = Logout;