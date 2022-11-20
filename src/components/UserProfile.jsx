// import react components
import { format } from 'date-fns'


const UserProfile = ({data}) => {

    // const localDate = format(new Date(data.dateOfBirth), 'mm-dd-yyyy') 

    const truncate = (str) =>  {
        return str.length > 20 ? str.substring(0,20) + '..."' : str;
        }

  return (
    <div className="mt-2">
        <div className="card--container">
            <div className="">
                <img className="profile-img" src={data.imgUrl} />
            </div>
            <h1>
                {data.person}
            </h1>
            <div className="description">
                {truncate(data.description)}
            </div>
            <div className="social">
                <a href={data.articleUrl}>Article</a>
                <a href={data.sourceUrl}>Source</a>
            </div>
            
            <footer>
                <div className="likes">
                <p>DOB</p>
                <p>12-05-1988</p>
                </div>
                <div className="projects">
                <p>Place Of Birth</p>
                <p>{data.placeOfBirth}</p>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default UserProfile