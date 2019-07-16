import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <>
                <section className="contact">
                    <div className="contact__center">
                        <article className="contact__info">
                            <div className="news__title">
                                <h1 className="news__title-name">
                                    Contact
                                </h1>
                            </div>
                            <div className="contact__info-single">
                                <div className="contact__info-single-name">address:
                                    <span className="contact__info-single-info">
                                        kí túc xá Ngoại ngữ - Đại học Quốc gia Hà Nội
                                    </span></div>
                            </div>
                            <div className="contact__info-single">
                                <div className="contact__info-single-name">phones:
                                    <span className="contact__info-single-info">
                                        0868219953
                                    </span>
                                </div>
                            </div>
                            <div className="contact__info-single">
                                <div className="contact__info-single-name">We are open:
                                 <span className="contact__info-single-info">
                                        Mn-Fr: 10 am-8 pm
                                </span></div>
                            </div>
                            <div className="contact__info-single-icons">
                                <a href="https://facebook.com" target="blank" className="contact__info-single-icon">
                                    <i className="fab fa-facebook" />
                                </a>
                                <a href="https://gmail.com" target="blank" className="contact__info-single-icon">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="https://twitter.com" target="blank" className="contact__info-single-icon">
                                    <i className="fab fa-twitter" />
                                </a>
                            </div>
                        </article>
                        <form className="contact__form">
                            <div className="news__title">
                                <h1 className="news__title-name">
                                    Let's get in touch
                                </h1>
                            </div>
                            <div className="contact__form-single">
                                <label htmlFor="Name">Your name</label>
                                <input type="text" id = "name" name ="name" className="contact__form-single-input" />
                            </div>
                            <div className="contact__form-single">
                                <label htmlFor="email">Your email</label>
                                <input type="email" id = "email" name = "email" className="contact__form-single-input" />
                            </div>
                            <div className="contact__form-single">
                                <label htmlFor="textFeedback">Your message</label>
                                <textarea id = "textFeedback" name = "textFeedback" cols={30} rows={10} defaultValue={""} />
                            </div>
                            <button className="contact__form-btn">send</button>
                        </form>
                    </div>
                </section>

            </>
        )
    }
}
