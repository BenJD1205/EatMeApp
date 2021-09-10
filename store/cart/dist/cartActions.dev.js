"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeToCart = exports.addToCart = exports.REMOVE_TO_CART = exports.ADD_TO_CART = void 0;
var ADD_TO_CART = 'ADD_TO_CART';
exports.ADD_TO_CART = ADD_TO_CART;
var REMOVE_TO_CART = 'REMOVE_TO_CART';
exports.REMOVE_TO_CART = REMOVE_TO_CART;

var addToCart = function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

exports.addToCart = addToCart;

var removeToCart = function removeToCart(product) {
  return {
    type: REMOVE_TO_CART,
    payload: product
  };
};

exports.removeToCart = removeToCart;