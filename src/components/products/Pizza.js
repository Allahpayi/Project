import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Pizza extends Component {
    state={
        pizza: [1,2,3,4,5,6,7,8,9,10,11,12,13]
    }
    render() {
        return (
            <div className="row">
            {
                this.state.pizza.map(item => (
                    <ProductCard/>
                ))
            }
            </div>
        );
    }
}

export default Pizza;
