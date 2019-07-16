import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__container">
                    <h1 className="banner__title">
                        the summer camp open on ...
                    </h1>
                    <button className="banner__btn">
                        more info
                    </button>
                </div>
            </section>
        )
    }
}
