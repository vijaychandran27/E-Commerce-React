import * as R from 'ramda';

const ping = state => R.pathOr('', ['user', 'ping'], state);
const token = state => R.pathOr('', ['user', 'token'], state);
const product = state => R.pathOr('', ['user', 'product'], state);


const selectors = {
    ping,
    token,
    product
};

export default selectors;