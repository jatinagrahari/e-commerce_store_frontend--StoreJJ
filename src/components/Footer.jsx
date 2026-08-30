import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="">
          <div className="">
            <h2 className="">Logo</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              autem dolorem tempora fuga minima modi earum dolorum ratione,
              consequuntur vitae?
            </p>
          </div>
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
              <li className="">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>
        <div className="">
          <p>copyright 2026 built by | Jatin Agrahari</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
