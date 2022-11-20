// Import React Components
import { useState, useEffect } from "react"

// Import Axios Library
import axios from 'axios'



// Import API_URL
import { RESTAURANTS_API_URL } from "../data/API"


// Import Custom Components
import Resturant from "./Resturant";





const Restaurants = () => {

    // Sit Const restaurants list 
    const [restaurants, setRestaurants] = useState(null)



    // using useEffect hook to fetch data from the API
    useEffect(()=> {
        // Call the API using axios 
        axios.get(RESTAURANTS_API_URL).then((response)=> {
            setRestaurants(response.data)
        })
    }, [])


    if (!restaurants) return null;



  return (
    <div className="mt-5">
        <h1 className="title"><strong>Restaurants</strong></h1>

        <div className="wrapper--container">
            {/* render the restaurants list inside the wrapper container */}

            {
                restaurants.map(restaurant=> 
                    <Resturant key={restaurant.id} data={restaurant}/>
                    )
            }
        </div>
    </div>
  )
}

export default Restaurants