import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import { reducers, sagas } from "./features";

export default function configureStore(intialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(
        reducers,
        intialState,
        composeEnhancers(
            applyMiddleware(
                ...middlewares
            )
        )
    )

    let sagaTask = sagaMiddleware.run(sagas);

    if(module.hot){
        module.hot.accept( './features', () => {
            const {reducers, sagas} = require('./features');
            store.replaceReducer(reducers);
            sagaTask.cancel();
            sagaTask.done.then(() => {
                sagaTask = sagaMiddleware.run(sagas);
            })
        })
    }

    return store;
}