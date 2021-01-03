import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Pasta extends Component {
    state={
        pasta: [1,2,3,4]
    }
    render() {
        return (
            <div className="row">
            {
                this.state.pasta.map(item => (
                    <ProductCard/>
                ))
            }
            </div>
        );
    }
}

export default Pasta;
