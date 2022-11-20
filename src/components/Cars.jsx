// import react components
import {useEffect, useState} from 'react';

// import axios
import axios from 'axios';




// import data Api link
import { CARS_API_URL } from "../data/API"


// Import custom components
import Car from "./Car"


const Cars = () => {

  // Use State to setCars List
  const [cars_list, setCarsList] = useState(null)



  // call to api to fetch the data
  useEffect(()=> {
   
    // Call to api using axios.get
      axios.get(CARS_API_URL).then((res) => {
        // check if response data is not null then assign the response data to carslist 
        !res.data ? setCarsList(res.data) : setCarsList()
        setCarsList(res.data)
        
      })

  }, [])


  

  if (!cars_list) return null;


  return (
    <div className='mt-5'>

      <h1 className="title"><strong>Cars</strong></h1>

      <div className="wrapper--container">
          {
          cars_list.map(car => 
                <Car key={car.id} {...car} />
          )}
      </div>

    </div>



  )
}

export default Cars