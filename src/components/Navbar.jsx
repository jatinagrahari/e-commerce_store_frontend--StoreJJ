import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="">
          <div className="">Logo</div>
          <div className="">
            <ul className="">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="">
              <li className="">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="/profile">
                <Link>Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
