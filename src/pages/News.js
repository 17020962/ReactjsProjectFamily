import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context';
import SingleNews from '../components/SingleNews';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.number = 1;
        this.handleClick = this.handleClick.bind(this);
    }

    static contextType = NewsContext;

    handleClick(e, id) {
        this.number = id;
        window.scrollTo(0,0);
    }

    render() {

        let { news } = this.context;

        let pageNews = news.filter((item,index)=>{
            return (Math.ceil(index/4)) === this.number;
        })
        
        pageNews = pageNews.map((item) => {
            return (
                <SingleNews key={item.id} news={item} />
            );
        });

        let list = [];
        for (let i = 0; i < news.length/4; i++) {
            list.push(i);
        }

        return (
            <>
                <section className="news">
                    <div className="news__title">
                        <h1 className="news__title-name">
                            News
                        </h1>
                    </div>
                    <div className="news__center">
                        {pageNews}
                    </div>
                </section>
                <section className="list__btn">
                    <ul className="list">
                        {

                            list.map((item, index) => {
                                return (
                                    <li key={index} >
                                        <Link to={`/news/page/${item+1}`}
                                            className="list__btn-page"
                                            onClick={(e) => this.handleClick(e, item+1)} >
                                            {item+1}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
            </>
        )
    }
}
