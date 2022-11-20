// Import Hooks
import {useState, useEffect} from 'react';


// import Axios
import axios from 'axios';

// Import API_URL
import { BOOKS_API_URL } from '../data/API';



// import costum components
import Book from './Book';

const Books = () => {

  const [booksList, setBooks] = useState()



  useEffect(()=> {
    axios.get(BOOKS_API_URL).then((res) => {
      setBooks(res.data)
    

    })
  }, [])

  

  if (!booksList) return null;


  return (
    <div className="mt-5">
        <h1 className="title"><strong>Books</strong></h1>

        <div className="wrapper--container">
          {booksList.map( book => 
                <Book  key={book.id} {...book} />
            )};
        </div>

    </div>
  )
}

export default Books;

