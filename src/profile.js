import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {takeEvery, all} from "redux-saga/effects";
import {fetchUserTodos, fetchUserInfo, editUserInfo} from "./sagas";
import {getIn, set, setIn} from "immutable";

const initialState = {
    userTodos: getIn(window.__DATA__, ['userTodos'], []),
    userInfo: getIn(window.__DATA__, ['userInfo'], {})
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_TODOS_SUCCESS':
            return set(state, 'userTodos', action.payload.userTodos);
        case 'FETCH_USER_INFO_SUCCESS':
            return set(state, 'userInfo', action.payload.userInfo);
        case 'EDIT_USER_INFO_SUCCESS':
            return setIn(state, ['userInfo'], action.payload.userInfo);
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
        takeEvery('FETCH_USER_TODOS_START', fetchUserTodos),
        takeEvery('FETCH_USER_INFO_START', fetchUserInfo),
        takeEvery('EDIT_USER_INFO_START', editUserInfo)
    ]);
}

sagaMiddleware.run(watchSaga);

const app = (
    <Provider store={store}>
        <Profile/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
