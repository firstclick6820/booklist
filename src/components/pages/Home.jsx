// Import custom Components
import Cars from "../Cars";
import Books from "../Books";
import Fancy from "../Fancy";
import Activists from "../Activists";


// Import react router components
import { Link } from 'react-router-dom';

// Import React Components
import {useState} from 'react';


// Import Site Data
import { SiteData } from "../../data/SiteData";


const Home = () => {
  const [elements, setElements] = useState(SiteData)



  return (
    <div className="wrapper--container mt-6">
     
      
      {
      
      
      elements.map((item, id) =>

          <Link to={item.name} key={id} >
            <Fancy element = {item}/>
          </Link>

          )}

    </div>
  )
}

export default Home;