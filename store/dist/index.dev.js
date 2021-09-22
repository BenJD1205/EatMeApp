"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _cartReducer = _interopRequireDefault(require("./cart/cartReducer"));

var _loginReducer = _interopRequireDefault(require("./login/loginReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  cart: _cartReducer["default"],
  login: _loginReducer["default"]
});

exports["default"] = _default;