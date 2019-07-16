import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

    state = {
        isClick: false,
        showBtn: false,
        Y: 0
    }

    handleClick = () => {
        this.setState({
            isClick: true
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScroll);
        this.scrollTop = setInterval(this.upTop);
    }

    upTop = () => {
        if (this.state.isClick) {
            let yScroll = window.pageYOffset;
            yScroll = yScroll - 30;
            window.scrollTo(0, yScroll);
        }
    }

    listenScroll = () => {
        this.setState({
            Y: window.pageYOffset,
            showBtn: true
        });
        if (this.state.Y === 0) {
            this.setState({
                showBtn: false,
                isClick: false
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScroll);
        clearInterval(this.scrollTop);
    }

    render() {
        return (
            <>
                <section className="footer">
                    <div className="footer__center">
                        <article className="footer__center-copyright">
                            Copyright (c) 2019 All rights reserved by TranHongPhuc
                        </article>
                        <article className="footer__center-contact">
                            <Link to="facebook.com" className="footer__single-icon">
                                <i className="fab fa-facebook" />
                            </Link>
                            <Link to="gmail.com" className="footer__single-icon">
                                <i className="fab fa-google" />
                            </Link>
                            <Link to="twitter.com" className="footer__single-icon">
                                <i className="fab fa-twitter" />
                            </Link>
                        </article>
                    </div>
                </section>

                <div className={this.state.showBtn ? "top__btn" : "top__btn hiddenBtnTop"} onClick={this.handleClick}>
                    <i className="fas fa-arrow-up"></i>
                </div>

            </>
        )
    }
}
