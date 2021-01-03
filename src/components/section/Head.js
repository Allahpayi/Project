import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

class Head extends Component {
    render() {
        return (
            <div className="header">
                <NavBar/>
                <div className="header-content">
                    <h1 className="title">Zeit, Essen zu bestellen</h1>
                    <p className="header-text">Jetzt Restaurants in Deiner Umgebung finden</p>
                    <div className="search-bar">
                        <div className="input-group">
                            <i className="fal fa-map-marker-check"></i>
                            <input type="text" placeholder="Address" />
                        </div>
                        <div className="button-group">
                            <Link to={'/products'} className="btn btn-success mr-1 rounded-0">Servis yap</Link>
                            <Link  to={'/products'} className="btn btn-success ml-1  rounded-0">Kendim alacağım</Link>
                        </div>
                    </div>
                </div>
                <div className="header-img">
                <div className="header-img-top"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg" className="img-fluid" alt="" />
                </div>
            </div>
        );
    }
}

export default Head;
