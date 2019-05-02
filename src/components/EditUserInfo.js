import React, {Component} from 'react';
import {connect} from 'react-redux';
import {set} from 'immutable';

export class EditUserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    componentWillMount() {
        this.setState({userInfo: this.props.userInfo});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveUserInfo(this.state.userInfo)
    }

    handleChangeInput(event) {
        let newUserInfo = set(this.state.userInfo, [event.target.id], event.target.value);
        this.setState({userInfo: newUserInfo});
    }

    render() {

        const {name, phone, email, website} = this.state.userInfo;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name" value={name}
                        placeholder="user.name"
                        onChange={(e) => this.handleChangeInput(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phone}
                        placeholder="user.phone"
                        onChange={(e) => this.handleChangeInput(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email" value={email}
                        placeholder="user.email"
                        onChange={(e) => this.handleChangeInput(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="website">Сайт</label>
                    <input
                        type="text"
                        className="form-control"
                        id="website" value={website}
                        placeholder="user.website"
                        onChange={(e) => this.handleChangeInput(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Сохранить</button>
            </form>

        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        saveUserInfo: (userInfo) => dispatch({type: 'EDIT_USER_INFO_START', payload: userInfo})
    }
};

export default connect(null, mapDispatchToProps)(EditUserInfo);