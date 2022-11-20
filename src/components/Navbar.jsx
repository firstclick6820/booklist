// Import React Router Components
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
  
    <nav className="navbar" role="navigation" aria-label="main navigation">
        {/* Logo  */}
        <div className="navbar-brand">
           
            <Link to="/" className="navbar-item">Home</Link>
           
            

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>


        
        <div id="navbarBasicExample" className="navbar-menu">

            <div className="navbar-start">
                <Link to="books" className="navbar-item">Books</Link>
                <Link to="cars" className="navbar-item">Cars</Link>  
                <Link to="activists" className="navbar-item">Activists</Link>  
                <Link to="restaurants" className="navbar-item">Restaurants</Link>    
                <Link to='products' className="navbar-item">Products</Link>     
                <Link to="authors" className="navbar-item">Authors</Link>
            <div className="navbar-item has-dropdown is-hoverable">
                {/* <Link to="/" className="navbar-item">More</Link>

                    <div className="navbar-dropdown">
                        <Link to="/" className="navbar-item">About</Link>
                </div> */}
            </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    {/* <div className="buttons">

                        <Link to="/" className="button is-primary">
                            <strong>Sign up</strong>
                        </Link>
            
                        <Link to="/" className="button is-light">Login</Link>
                    </div> */}
                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar