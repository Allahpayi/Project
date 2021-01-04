import React, { Component } from 'react';
import Profile from '../section/Profile'
class NavBar extends Component {
    render() {
        return (
            <div className="header-top">
                <a className="navbar-brand" href="/">Lieferando</a>
                <div className="header-top-right">
                    <span className="number">{this.props.phone ? this.props.phone : ""}</span>
                    <Profile/>
                </div>
            </div>
        );
    }
}

export default NavBar;
