import React, { Component } from 'react';
import BlogItem from '../section-item/BlogItem';
import SectionHeader from './SectionHeader';
class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <SectionHeader info="Neu hier?" title="Entdecke Lieferando.de" />
                    </div>
                    <div className="row">
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
