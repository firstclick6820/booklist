

const Book = (book) => {
 const truncateDescription = (str) =>  {
    return str.length > 100 ? str.substring(0, 150) + "..." : str;
    }

    const truncateQoutes = (str) =>  {
      return str.length > 20 ? str.substring(0,20) + '..."' : str;
      }
    
  return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={book.image_url} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
           
            <div className="media-content">
              <p className="title is-4">{book.title}</p>
              <p className="subtitle is-6">by <a href="">{book.authors} (Author)</a></p>


              <div className="general--wrapper">
                  <div className="left">
                      <span className="icon has--text--warning">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                      </span>
                      <span className="ml-6 has-text-success">
                        {book.rating_count} ratings
                      </span>
                  </div>

                  <div className="right has-text-secondary">
                      ({book.num_pages}) pages
                  </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="content">

            
            
            <div className="book--content mb-2">
              {truncateDescription(book.description)}
            </div>


            <div>
              <a href="">{truncateQoutes(book.Quote1)}</a>
            </div>
            <div>
              <a href="">{truncateQoutes(book.Quote2)}</a>
            </div>

            <div>
              <a href="">{truncateQoutes(book.Quote3)}</a>
            </div>


            <hr />

            <div class="block">
              <strong>{book.genres}</strong>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Book