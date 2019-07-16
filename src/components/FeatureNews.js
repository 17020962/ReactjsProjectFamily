import React, { Component } from 'react'
import { NewsContext } from '../context';
import { Link } from 'react-router-dom';

export default class FeatureNews extends Component {
    static contextType = NewsContext;
    render() {
        let data = this.context.lastNews;
        let news = data.map((item) => {
            return (
                < article key = {item.id} className="feature__single-feature" >
                    <img src={item.images[0]} alt="image_feature" className="feature__single-feature-img" />
                    <span className="feature__single-feature-center">
                        <a href="donthave" className="feature__single-feature-date">
                            {item.Date}
                        </a>
                        <Link to={`/news/${item.id}`} className="feature__single-feature-icon">
                            <i className="fas fa-search" />
                        </Link>
                    </span>
                </article >
            )
        });
        return (
            <>
                <section className="feature">
                    <div className="feature__center">
                        {news}
                    </div>
                </section>
            </>
        )
    }
}
