
// Import React Components
import { useState } from "react";


// Import React Router Components
import { Routes, Route } from "react-router-dom";



// Import custom Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Books from './components/Books';
import Cars from './components/Cars'
import Activists from "./components/Activists";
import Restaurants from "./components/Restaurants";
import Authors from "./components/Authors";
import Products from "./components/Products";
import Articles from './components/Articles'

// import Custom pages
import Home from './components/pages/Home';


function App() {
  return (

    <div className="container">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="footer" element={<Footer />} />
            <Route path="books" element={<Books />} />
            <Route path="products" element={<Products />} />
            <Route path="activists" element={<Activists />} /> 
            <Route path="cars" element={<Cars />} />
            <Route path="articles" element={<Articles /> } />
            <Route path="authors" element={<Authors />} />
            <Route path="restaurants" element={<Restaurants />} />
        </Routes>
    </div>
  );
}

export default App;
