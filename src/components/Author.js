import React, { Component } from 'react'
import { NewsContext } from '../context';

export default class Author extends Component {
    static contextType = NewsContext;
    render() {
        let dataAuthor = [...this.context.news];



        return (
            <>
                {
                    dataAuthor.filter((single,index)=>{
                        return index===0;
                    }).map((item) => {
                        return (
                            <section key = {item.id} className="authorPage">
                                <div className="author__center">
                                    <article className="author__single-author">
                                        <h1 className="author__single-author-title">
                                            Happy Author
                                        </h1>
                                        <img src={item.images[0]} alt="" className="author__single-author-img" />
                                        <h2 className="author__single-author-name">Tran Hong Phuc</h2>
                                        <p className="author__single-author-text">" {item.description} "</p>
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
