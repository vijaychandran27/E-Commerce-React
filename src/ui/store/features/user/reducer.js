import { SET_PING, SET_LOGIN_DATA, SET_PRODUCT_DATA } from './type';

const reducers = (state = {}, action) => {
    switch (action.type) {
        case SET_PING : {
            const ping = action.data;
            return {
                ...state, ping
            };
        }
        case SET_LOGIN_DATA : {
            const token = action.data;
            return {
                ...state, token
            };
        }
        case SET_PRODUCT_DATA : {
            const product = action.data;
            return {
                ...state, product
            };
        }

        default: return state;
    };
};

export default reducers;