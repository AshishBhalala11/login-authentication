import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App mt-100 flex-column align-items">
      <h2>Welcome to Login authentication App</h2>
      <h3>
        <Link to="/account/login">Click here</Link> to go to login page
      </h3>
    </div>
  );
}

export default Home;
