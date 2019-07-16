import React from 'react';
import {Link} from 'react-router-dom';

export default function SingleNews({ news }) {
    const {id,title, Date, images ,description,author} = news;
    return (
        <>
            <article className="news__single-new">
                <h1 className="news__single-new-title">
                    <i className="fas fa-star" />{title}
                </h1>
                <img src={images[0]} alt= "single_news" className="news__single-new-img" />
                <div className="news__single-new-info">
                    <p className="news__single-new-info-text">
                        {description}
                     </p>
                    <span className="date-and-author">
                        <a href="none" className="date">{Date + " "}</a><i>by </i>
                        <a href="none" className="authorEntries">{author}</a>
                    </span>
                    <Link to={`/news/${id}`} className="news__single-new-read">
                        Read more
                    </Link>
                </div>
            </article>

        </>
    )
}
