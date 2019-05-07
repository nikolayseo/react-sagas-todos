import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditUserInfo from './EditUserInfo';
import ListTodos from './ListTodos';
import Nav from './Nav';

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editUserInfo: false
        }
    }

    componentDidMount() {

        if (!this.props.userTodos.length) {
            this.props.fetchUserTodos();
        }

        if (!this.props.userInfo.id) {
            this.props.fetchUserInfo();
        }

    }

    render() {

        const {name, phone, email, website} = this.props.userInfo;

        return (
            <div>
                <Nav username={name}/>
                <div className="container">
                    <h2>Задачи {name}</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <p>
                                {name}
                            </p>
                            <p>
                                {phone}
                            </p>
                            <p>
                                {email}
                            </p>
                            <p>
                                <a href={website}>{website}</a>
                            </p>
                            <p>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.setState({editUserInfo: !this.state.editUserInfo})
                                    }}>Редактировать
                                </button>
                            </p>
                            {this.state.editUserInfo ? <EditUserInfo userInfo={this.props.userInfo}/> : null}
                        </div>
                        <div className="col-md-8">
                            {this.props.userTodos ? <ListTodos username={name} userTodos={this.props.userTodos}/> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userTodos: state.todos.userTodos,
        userInfo: state.todos.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserTodos: (id) => dispatch({type: 'FETCH_USER_TODOS_START', payload: {id}}),
        fetchUserInfo: (id) => dispatch({type: 'FETCH_USER_INFO_START', payload: {id}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);