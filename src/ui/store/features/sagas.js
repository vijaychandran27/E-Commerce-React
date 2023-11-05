import { all } from 'redux-saga/effects';
import { combinedsaga as user } from './user';

export default function* rootsaga(){
    yield all([
        user()
    ])
};
