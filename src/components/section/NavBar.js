import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="header-top">
                <a className="navbar-brand" href="/">Lieferando</a>
                <div className="header-top-right">
                    <i className="fa fa-bars bars"></i>
                </div>
            </div>
        );
    }
}

export default NavBar;
