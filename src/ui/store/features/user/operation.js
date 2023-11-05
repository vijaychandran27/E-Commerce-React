import { getPing, getLoginData, getProductData } from './action';

const dispatchPing = dispatch => (data) => {
    dispatch(getPing(data));
};

const dispatchGetLoginData = dispatch => (data) => {
    dispatch(getLoginData(data));
};

const dispatchGetProductData = dispatch => (data) => {
    dispatch(getProductData(data));
};

const operation = {
    dispatchPing,
    dispatchGetLoginData,
    dispatchGetProductData
}

export default operation;