import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './components/Tasks';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {takeEvery, all} from "redux-saga/effects";
import {fetchTodos, fetchUserInfo} from "./sagas";
import {getIn, set} from "immutable";

const initialState = {
    todos: getIn(window.__DATA__, ['todos'], []),
    allUserInfo: getIn(window.__DATA__, ['allUserInfo'], []),
    userInfo: getIn(window.__DATA__, ['user'], {})
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return set(state, 'todos', action.payload.todos);
        case 'FETCH_ALL_USER_INFO_SUCCESS':
            return set(state, 'allUserInfo', action.payload.allUserInfo);
        case 'FETCH_USER_INFO_SUCCESS':
            return set(state, 'userInfo', action.payload.userInfo);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todos: appReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

export function* watchSaga() {
    yield all([
        takeEvery('FETCH_TODOS_START', fetchTodos),
        takeEvery('FETCH_USER_INFO_START', fetchUserInfo),
    ]);
}

sagaMiddleware.run(watchSaga);

const app = (
    <Provider store={store}>
        <Tasks/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));