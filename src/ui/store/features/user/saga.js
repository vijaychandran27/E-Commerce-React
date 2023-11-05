import { put, call, takeEvery, all } from 'redux-saga/effects';
import { GET_LOGIN_DATA, GET_PING, GET_PRODUCT_DATA } from './type';
import * as action from './action';

const pingBackend = async () => {
  return await fetch("/ping", {
    method: "GET",
  })
    .then((response) =>
      response.text().then(function (text) {
        return text;
      })
    )
    .catch((err) => {
      console.info('err', err)
      return err;
    });
};

const postData = async (data, url, token) => {

  return await fetch(url + '?token=' + token, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      if (!response.ok) {
        return { token: '' };
      }
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.info('err', err)
      return err;
    });
};

const getData = async (url, token) => {

  return await fetch(url + '?token=' + token, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      if (!response.ok) {
        return {};
      }
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.info('err', err)
      return err;
    });
};

function* getPingsaga() {
  try {
    const result = yield pingBackend();
    yield put(action.setPing(result));

  } catch (ex) {
    yield put(action.setPing('error'));
  }
};

function* postLoginSaga(payload) {
  try {
    const result = yield postData(payload.data, '/login', '');

    if (result?.token) {
      yield put(action.setLoginData(result?.token));
    } else {
      yield put(action.setLoginData(''));
    }

  } catch (ex) {
    yield put(action.setLoginData(''));
  }
};

function* getProductSaga(payload) {
  try {
    const result = yield getData('/products', payload.data);
    console.info(1,result);

    if (result.staus === 401) {
      yield put(action.setLoginData([]));
    }
    if (result?.product) {
      yield put(action.setProductData(result?.product));
    } else {
      yield put(action.setProductData([]));
    }

  } catch (ex) {
    yield put(action.setProductData([]));
  }
};

export default function* combinedsaga() {
  yield all([
    takeEvery(GET_PING, getPingsaga),
    takeEvery(GET_LOGIN_DATA, postLoginSaga),
    takeEvery(GET_PRODUCT_DATA, getProductSaga)
  ])
}