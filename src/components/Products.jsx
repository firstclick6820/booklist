// Import React Components
import {useState, useEffect} from 'react';



// Import Custom Components
import Product  from './Product';

// Import Axios
import axios from 'axios'



// Import Data API
import { PRODUCTS_API_URL } from '../data/API';

const Products = () => {

  const [products, setProducts] = useState(null)


  useEffect(()=> {
    axios.get(PRODUCTS_API_URL).then((response)=> {
      setProducts(response.data)
    })
  }, [])




  if (!products) return null;
    
  return (
   <div className="mt-5">
        <h1 className='subtitle'><strong>Products</strong></h1>



        <div className="wrapper--container">
          
        {
          products.map(product => 
            <Product key={product.id}  data = {product}/>
            
            )
        }
          
        </div>
   </div>
  )
}

export default Products