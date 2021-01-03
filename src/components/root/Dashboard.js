import React, { Component } from 'react';
import Head from "../section/Head";
import HowWeWork from "../section/HowWeWork";
import OurApp from "../section/OurApp";
import WhyWe from "../section/WhyWe";
import BlogTop from "../section/BlogTop";
import Blog from "../section/Blog";
class Dashboard extends Component {
    render() {
        return (
            <div>
            <Head />
            <HowWeWork/>
            <OurApp/>
            <WhyWe/>
            <BlogTop/>
            <Blog/>
            </div>
        );
    }
}

export default Dashboard;
