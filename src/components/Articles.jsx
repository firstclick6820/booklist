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



    // call to the API using react useEffect hook and axios

    useEffect(() => {
        axios.get(ARTICLES_API_URL).then((res)=> {
            setArticles(res.data);
         


        })
    }, [])


    if (!articles) return null;


    
  return (
    <div className="wrapper--container">
        <Article />    


    </div>
  )
}

export default Articles