import React, {Component} from 'react';
import ItemTodos from './ItemTodos';

export class ListTodos extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const items = this.props.userTodos.map((item, i) => {
            let name = this.props.allUserInfo ? this.props.allUserInfo.filter(o => o.id === item.userId)[0].name : this.props.username;
            return <ItemTodos key={i} username={name} item={item}/>
        });

        return (
            <ul className="list-group">
                {items}
            </ul>
        );
    }
}

export default ListTodos;