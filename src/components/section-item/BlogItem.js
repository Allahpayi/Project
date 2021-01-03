import React, { Component } from 'react';

class BlogItem extends Component {
    render() {
        return (
            <div className="col-md-3 mb-4">
                <div className="card">
                    <img src="https://smmagencepro.com/wp-content/uploads/2020/02/How-blogs-changed-the-world-1024x585.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Blog Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's.</p>
                        <a href="/blog-detail/2" className="btn btn-yellow-m">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogItem;
