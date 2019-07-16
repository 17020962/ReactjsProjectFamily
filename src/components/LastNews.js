import React, { Component } from 'react'
import { NewsContext } from '../context';
import { Link } from 'react-router-dom';

export default class LastNews extends Component {
    static contextType = NewsContext;
    render() {

        let data = this.context.featureNews;
        let list_lastNews = data.map((item) => {
            return (
                <article key = {item.id} className="infoEntries__single-infoEntries">
                    <img src={item.images[0]} alt="single-news" className="infoEntries__single-infoEntries-img" />
                    <div className="infoEntries__single-infoEntries-info">
                        <Link to={`/news/${item.id}`} className="infoEntries__single-infoEntries-info-title">
                            {item.title}
                        </Link>
                        <span className="date-and-author">
                            <a href="donthave" className="date">{item.Date + " "}</a><i>by </i>
                            <a href="donthave" className="authorEntries">{item.author}</a>
                        </span>
                        <p className="infoEntries__single-infoEntries-info-text">
                            {item.description}
                        </p>
                    </div>
                </article>
            );
        })

        return (
            <>
                <section className="infoEntries">
                    <div className="infoEntries__center">
                        {list_lastNews}
                    </div>
                </section>
            </>
        )
    }
}
