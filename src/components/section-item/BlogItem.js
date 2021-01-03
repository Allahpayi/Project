import React, { Component } from 'react';

class BlogItem extends Component {
    render() {
        return (
            <div className="col-md-3 mb-4">
                <div class="card">
                    <img src="https://smmagencepro.com/wp-content/uploads/2020/02/How-blogs-changed-the-world-1024x585.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Blog Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's.</p>
                        <a href="/blog-detail/2" class="btn btn-yellow-m">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogItem;
