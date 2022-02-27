import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <nav>
      <ul>
        <li className="title-app">
          Bookstore CMS
        </li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default NavBar;
