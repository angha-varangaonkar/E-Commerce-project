import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // Import Font Awesome Icons

function Homepage() {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <h1>GRAB<span>GOODS</span></h1>
        </div>

        {/* Categories Links */}
        <ul className="nav-categories">
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Children</a></li>
        </ul>

        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button><FaSearch /></button>
        </div>

        {/* Right Side Icons */}
        <div className="nav-icons">
          <a href="#" className="user-icon"><FaUser /></a>
          <a href="#" className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">3</span>
          </a>
        </div>
      </nav>

      {/* Inline Styling */}
      <style>{`
        /* General Styling */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
        }

        a {
          text-decoration: none;
          color: black;
        }

        ul {
          list-style-type: none;
        }

        /* Navbar Styling */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .logo h1 {
          font-size: 24px;
          font-weight: bold;
        }

        .logo span {
          color: red;
        }

        /* Category Links Styling */
        .nav-categories {
          display: flex;
          gap: 20px;
        }

        .nav-categories li {
          display: inline-block;
        }

        .nav-categories a {
          font-size: 16px;
          font-weight: bold;
          color: #555;
          text-transform: uppercase;
          padding: 10px 20px;
          transition: color 0.3s ease;
        }

        .nav-categories a:hover {
          color: red;
        }

        /* Search Bar Styling */
        .search-bar {
          display: flex;
          align-items: center;
        }

        .search-bar input {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 5px 0 0 5px;
          outline: none;
        }

        .search-bar button {
          padding: 10px 15px;
          background-color: red;
          color: white;
          border: none;
          border-radius: 0 5px 5px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        /* Right Side Icons Styling */
        .nav-icons {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-icons a {
          font-size: 20px;
          color: #555;
          transition: color 0.3s ease;
        }

        .nav-icons a:hover {
          color: red;
        }

        .cart-icon {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: red;
          color: white;
          font-size: 12px;
          border-radius: 50%;
          padding: 3px 7px;
        }
      `}</style>
    </div>
  );
}

export default Homepage;
