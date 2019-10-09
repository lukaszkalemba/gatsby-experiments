import React from 'react'
import { Link } from 'gatsby'
const Navbar = () => {
  return (
    <nav>
      <h2>codenice.com</h2>
      <h3>zaistniej w sieci</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
        <li>
          <Link to="/examples/">Examples</Link>
        </li>
        <li>
          <Link to="/images/">Images</Link>
        </li>
        <li>
          <Link to="/tours/">Tours</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
