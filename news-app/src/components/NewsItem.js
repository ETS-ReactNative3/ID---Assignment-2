import React from 'react'
import './NewsItem.css' //this will be used to style this page of news items

const NewsItem = ( {title, description, url, urlToImage }) => { //this will be the required parameter, NewsList data have to pass in when ever they call this func, unless of these parameter is set to default
  return (
    <div className='news__app'>

        <div className='news__item'>
            <img className='news__img' src={urlToImage} alt={urlToImage}/> {/*notice it used the url to the image passed in*/} 
            {/*this will be used to contain the image passed in*/}
            
            <div className='news__details'>
                <h3 className='news-title-url'>
                    <a href={url}>
                        {title}
                    </a>
                </h3>{/*this will be used to store the title and url passed in*/}
            
                <p className='news-desc'>
                    {description}
                </p>{/*this will be used to store the descirption passed in*/}
            </div>
            
        </div>
    </div>
  )
}
// we will be passing NewsItem as props into the NewList,
// as here we will be designing the news item, and in the NewsList, we will call the NewsItem, then we are going to pass 
// in all the data in newList into the newsItem, essentially newsItem is acting like a func to filter and produce a nice newsItem based on the data from the newsList

export default NewsItem