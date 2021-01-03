import React, { Component } from 'react';

class ProductSlider extends Component {
    render() {
     
        return (
            <div className="products">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://unsplash.com/photos/4miBe6zg5r0/download?force=true&w=1920" className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1445217143695-467124038776?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=833&q=80" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
               
            </div>
        );
    }
}

export default ProductSlider;
