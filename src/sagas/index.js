import {put, call} from "redux-saga/effects";
import * as actions from "../actions/index";

export function* fetchTodos(action) {

    try {
        let todos = yield fetch("https://jsonplaceholder.typicode.com/todos");
        todos = yield todos.json();
        yield put(actions.fetchTodosSuccess(todos));
        yield call(fetchAllUserInfo, todos);

    } catch (error) {
        console.error(error);
    }

}

export function* fetchUserTodos(action) {

    try {
        let userTodos = yield fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
        userTodos = yield userTodos.json();
        yield put(actions.fetchUserTodosSuccess(userTodos));

    } catch (error) {
        console.error(error);
    }

}

export function* fetchUserInfo(action) {

    try {
        let userInfo = yield fetch("https://jsonplaceholder.typicode.com/users?id=1");
        userInfo = yield userInfo.json();
        yield put(actions.fetchUserInfoSuccess(userInfo[0]));

    } catch (error) {
        console.error(error);
    }

}


export function* editUserInfo(action) {

    try {
        //yield fetch
        yield put(actions.editUserInfoSuccess(action.payload));

    } catch (error) {
        console.error(error);
    }

}

export function* fetchAllUserInfo(action) {

    try {

        let arrAllUserInfo = [];
        let arrAllUserInfoId = [];

        for (let i = 0; i < action.length; i++) {

            let userId = action[i].userId;

            if (arrAllUserInfoId.indexOf(userId) < 0) {
                let userInfo = yield fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
                userInfo = yield userInfo.json();
                yield arrAllUserInfo.push(...userInfo);
                yield arrAllUserInfoId.push(userId);
            }

        }

        yield put(actions.fetchAllUserInfoSuccess(arrAllUserInfo));

    } catch (error) {
        console.error(error);
    }

}
