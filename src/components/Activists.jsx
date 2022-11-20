// Import Custom Components
import UserProfile from "./UserProfile"

//Import Data
import {ACTIVISTS_API_URL} from '../data/API'


// Import React Components
import { useEffect, useState} from 'react';


// Import Axios
import axios from "axios";


const Activists = () => {

    const [activists, setActivists] = useState(null)


    useEffect(()=> {
        axios.get(ACTIVISTS_API_URL).then((res)=> {
            setActivists(res.data)
        })
    }, [])


    if (!activists) return null;

  return (
    <div className="mt-5">
       <h1 className="title"><strong>Activists</strong></h1>
        <div className="wrapper--container">
            {
                activists.map((activist, id) => <UserProfile key={id} data={activist}/>)
            }
        </div>
    </div>
  )
}

export default Activists;