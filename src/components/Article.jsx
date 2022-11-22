// import custom style for the article card
import '../assets/componenets__css/articleStyle.css'
const Article = ({data}) => {
    const truncate = (str) =>  {
        return str.length > 50 ? str.substring(0, 50) + "..." : str;
        }
    
  return (


        <div className="container">
            {/* Id 
            headline
            link
            summary
            imagesList */}
                <div className="card">
                    <div className="card-header">
                    <img src={data.imagesList} alt="rover" />
                    </div>
                    <div className="card-body">
                    <span className="tag tag-teal">Khaleej News</span>
                    <h4 className="mt-3">
                        <a href={data.link}>{truncate(data.headline)}</a>
                    </h4>
                    <p className="mt-3">
                        {truncate(data.summary)}
                    </p>
                   
                    </div>
                </div>      
        </div>
  )
}

export default Article;