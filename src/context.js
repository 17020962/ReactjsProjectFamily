import React, { Component } from 'react';
import items from './data';

const NewsContext = React.createContext();

class NewsProvider extends Component {

    state = {
        news: [],
        featureNews: [],
        lastNews: [],
        page: 0
    }

    componentDidMount() {
        let news = this.formatData(items);
        let featureNews = news.filter((newsItem, index) => {
            return index <= 3 && index >= 1;
        });
        let length = news.length;

        let lastNews = news.filter((newsItem, index) => {
            return index >= (length - 4);
        });

        this.setState({
            news: news,
            featureNews: featureNews,
            lastNews: lastNews
        });

    }

    formatData() {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.images.map(image => {
                return image.url;
            });
            let news = { ...item.fields, images, id };
            return news;
        })
        return tempItems;
    }

    getNews = (id) => {
        let tempNews = [...this.state.news];
        let news = tempNews.filter((item)=>{
            return item.id === id;
        });
        return news;
    }

    pageClick = (page)=>{
        this.setState({
            page: page
        });
    }

    render() {
        return (
            <NewsContext.Provider
                value={{
                    ...this.state,
                    getNews: this.getNews,
                    pageClick: this.pageClick
                }}
            >
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

const NewConsummer = NewsContext.Consumer;


export { NewsProvider, NewsContext, NewConsummer };
