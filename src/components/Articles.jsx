// Import Custom Components
import Article from "./Article";


// import React Components
import { useState, useEffect } from 'react';



// Import Axios
import axios from "axios";






// Import data API
import { ARTICLES_API_URL } from "../data/API";


const Articles = () => {
    const [articles, setArticles] = useState(null)

    const headers = {
        "Content-Type": "application/json",
      };
    
    


    // call to the API using react useEffect hook and axios

    useEffect(() => {
        axios.get(ARTICLES_API_URL, {headers}).then((res)=> {
            setArticles(res.data);
            
        }).catch((err)=> {
            console.log(err)
        })
    }, [])


    if (!articles) return null;


    
  return (
    <div className="wrapper--container">
        

        { 
            articles.map((article, index) => 

                article.imagesList? <Article key={index}  data={article}/> : null
        )}
        
    </div>
  )
}

export default Articles