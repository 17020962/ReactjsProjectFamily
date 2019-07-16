import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SeeAllNewsButton extends Component {
    render() {
        return (
            <>
                <section className="see__moreBtn">
                    <div className="see__moreBtn-center">
                        <Link to = "/news/page/1" className="see__moreBtn-btn-name">
                            <button className="see__moreBtn-btn">
                                see all news
                            </button>
                        </Link>
                    </div>
                </section>

            </>
        )
    }
}
