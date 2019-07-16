import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            // <!-- about section -->

            <section className="about">
                <div className="about__center">
                    <article className="about-child about__welcome">
                        <div className="about__welcome-container">
                            <h1 className="about__welcome-title">
                                welcome to where
                            </h1>
                            <div className="about__welcome-choose">
                                <h1 className="about__welcome-choose-child">a happly</h1>
                                <h1 className="about__welcome-choose-child">childhood</h1>
                                <h1 className="about__welcome-choose-child">resides!</h1>
                            </div>
                        </div>
                    </article>
                    <article className="about-child about__info">
                        <div className="about__info-container">
                            <h1 className="about__info-title">
                                The Story Behind the AppyTimes Summer Camp…
                            </h1>
                            <p className="about__info-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique eaque qui, ea temporibus ipsum ullam animi iure saepe quo doloremque accusamus officiis dolorem aspernatur eveniet incidunt nostrum, impedit quisquam?
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            // end of about section

        )
    }
}
