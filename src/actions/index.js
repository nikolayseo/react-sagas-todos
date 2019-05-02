export const fetchTodosSuccess = (todos) => {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        payload: {todos}
    };
};

export const fetchUserTodosSuccess = (userTodos) => {
    return {
        type: 'FETCH_USER_TODOS_SUCCESS',
        payload: {userTodos}
    };
};

export const fetchUserInfoSuccess = (userInfo) => {
    return {
        type: 'FETCH_USER_INFO_SUCCESS',
        payload: {userInfo}
    };
};

export const editUserInfoSuccess = (userInfo) => {
    return {
        type: 'EDIT_USER_INFO_SUCCESS',
        payload: {userInfo}
    };
};

export const fetchAllUserInfoSuccess = (allUserInfo) => {
    return {
        type: 'FETCH_ALL_USER_INFO_SUCCESS',
        payload: {allUserInfo}
    };
};