import { GET_PING, SET_PING, GET_LOGIN_DATA, SET_LOGIN_DATA, SET_PRODUCT_DATA, GET_PRODUCT_DATA } from "./type"

export const getPing = (data) => ({
    type: GET_PING,
    data
});

export const setPing = (data) => ({
    type: SET_PING,
    data
});

export const getLoginData = (data) => ({
    type: GET_LOGIN_DATA,
    data
});

export const setLoginData = (data) => ({
    type: SET_LOGIN_DATA,
    data
});

export const getProductData = (data) => ({
    type: GET_PRODUCT_DATA,
    data
});

export const setProductData = (data) => ({
    type: SET_PRODUCT_DATA,
    data
});