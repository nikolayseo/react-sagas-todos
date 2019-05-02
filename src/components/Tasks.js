import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from './Nav';
import ListTodos from "./ListTodos";

export class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

        if (!this.props.todos) {
            this.props.fetchTodos();
        }

        if (!this.props.userInfo) {
            this.props.fetchUserInfo();
        }

    }

    render() {

        let {allUserInfo, todos} = this.props;

        return (
            <div>
                <Nav username={name}/>
                <div className="container">
                    <h2>Все задачи</h2>
                    {allUserInfo && todos ?
                        <ListTodos allUserInfo={allUserInfo} userTodos={todos}/> : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        allUserInfo: state.todos.allUserInfo,
        userInfo: state.todos.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch({type: 'FETCH_TODOS_START'}),
        fetchAllUserInfo: () => dispatch({type: 'FETCH_ALL_USER_INFO_START'}),
        fetchUserInfo: (id) => dispatch({type: 'FETCH_USER_INFO_START', payload: {id}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);