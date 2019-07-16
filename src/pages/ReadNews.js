import React, { Component } from 'react'
import { NewsContext } from '../context';

export default class ReadNews extends Component {
    static contextType = NewsContext;

    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }

    componentDidMount(){
        window.scrollTo(0,106);
    }


    render() {
        const { getNews } = this.context;
        const news = getNews(this.state.slug);
        return (
            <>
                {
                    news.map((item) => {
                        return (
                            <section key = {item.id} className="read">
                                <div className="news__title">
                                    <h1 className="news__title-name">
                                        {item.title}
                                    </h1>
                                </div>
                                <div className="read__author">
                                    <span className="read__author-date">
                                        05-11-2019
                                    </span>
                                    <span className="read__author-author">
                                        by
                                         <a href="donthave" className="read__author-author-name">
                                            admin
                                        </a>
                                    </span>
                                </div>
                                <div className="read__center">
                                    <article className="read__single">
                                        <img src={item.images[0]} alt = "single_img" className="read__single-img" />
                                        <p className="read__singe-text">
                                            {item.description}
                                        </p>
                                        <img src={item.images[1]} alt = "single_img" className="read__single-img" />
                                        <p className="read__singe-text">
                                        {item.description}
                                        </p>
                                    </article>
                                </div>
                            </section>
                        );
                    })
                }

            </>
        )
    }
}
