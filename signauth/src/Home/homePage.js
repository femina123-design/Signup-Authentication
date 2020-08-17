import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return(<div>
    <h1>Welcome to Home Page</h1>
    <p> you are Logged in</p>
    
    <Link to="/Signin">Logout</Link>
    </div>
  )
}

export default HomePage;
