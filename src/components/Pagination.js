import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NewsContext } from '../context';

export default class Pagination extends Component {
    static contextType = NewsContext;
    render() {
        const page = this.context.page;
        console.log("page",page);
        return (
            <>
                <section className="list__btn">
                    <ul className="list">
                        <li><Link to ={`/news/page/${1}`} className="list__btn-page">1</Link></li>
                        <li><Link to ={`/news/page/${2}`} className="list__btn-page">2</Link></li>
                        <li><Link to ={`/news/page/${3}`} className="list__btn-page">3</Link></li>
                        <li><Link to ={`/news/page/${4}`} className="list__btn-page">4</Link></li>
                        <li><Link to ={`/news/page/${1}`} className="list__btn-page"><i className="fas fa-arrow-right"></i></Link></li>
                    </ul>
                </section>
            </>
        )
    }
}
