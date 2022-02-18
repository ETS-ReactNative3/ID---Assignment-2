import React, {useState, useEffect} from 'react';
import axios from 'axios'; //this will be used to fetch data
import NewsItem from './NewsItem'; //this will allow us to use the News item function

const NewsList = () => {
    const [articles, setArticles] = useState([]) //here i have an empty array
  
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=8386b806164b49d2ac20dd028d9c6a4e') //here it stores the response, which axios helps us to fetch
            //console.log(response)
            setArticles(response.data.articles) //this allows you to traverse through the data sent and store ALL the articles in the state(var) array for all the articles

        } //this is an async function, which will await fro the axios response
        getArticles()
    },[]);//we will be using useEffect, alongside of axios to fetch the api data
    //here we ensure the data is only loaded once not more than once, and will only be used again if called once more or a certain action(event) triggers it

    return (
        <div>
            {/*NewsList*/}

            {articles.map((article,index) => {
                return(
                    <NewsItem key={index}  //Each child in a list should have a unique "key" prop, hence i added the index in as parameter an in each iteration it map the key with a new unqiue index
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })} 
            
            {/* we defined the each obj as an article an access each obj's respective attr to be stored in a var*/ }
            {/*Here we map the articles store in the array iterate through an map all attribute to a specific variable*/}

        </div>
    )
}

export default NewsList