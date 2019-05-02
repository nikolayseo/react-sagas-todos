import React from 'react';

const Nav = (props) => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="tasks.html">Все задачи</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="profile.html">Мои задачи</a>
                    </li>
                </ul>
                <span className="navbar-text">
			     	{props.username}
			    </span>
            </div>
        </nav>
    );

};

export default Nav;