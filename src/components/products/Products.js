import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../section/NavBar';
import ProductMenu from './ProductMenu';
import ProductSlider from './ProductSlider';
import Pizza from './Pizza';
import Pasta from './Pasta';
import Panini from './Panini';
import Salat from './Salat';
import Dessert from './Dessert';
import Water from './Water';

class Products extends Component {
    render() {

        return (
            <div className="products">
                <NavBar phone="+994 50 999 99 99" />
                <ProductSlider />
                <ProductMenu />
                <div className="product">
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/products" component={Pizza} />
                        <Route path="/products/pasta" component={Pasta} />
                        <Route path="/products/panini" component={Panini} />
                        <Route path="/products/salat" component={Salat} />
                        <Route path="/products/dessert" component={Dessert} />
                        <Route path="/products/water" component={Water} />
                    </Switch>
                </div>
                </div>

            </div>
        );
    }
}

export default Products;
