import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/360_F_97169647_iiLq9r0z4JzOoJoaunG7KulHYRpd5ewd.jpg';
const NotFound = () => {
    return (
        <div>
<div className="card bg-dark text-white">
  <img style={{height:"600px"}} src={notFound} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h1 className="text-danger">404!</h1>
    <h2>Page not found</h2>
    <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
    <Link to="/"> <button className="btn btn-danger">Back to Home</button> </Link>
  </div> 
  </div>
        </div>
    );
};

export default NotFound;