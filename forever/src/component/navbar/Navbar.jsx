import React, { useState } from 'react';
import './navbar.css';
import { CiHeart } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { RiFolderInfoFill } from 'react-icons/ri';
import { IoPersonCircle } from 'react-icons/io5';
import { IoBagRemoveOutline } from 'react-icons/io5';

// Navbar component
function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="dropdown" onClick={toggleDropdown}>
          <button className="dropbtn">MORE BRANDS</button>
          <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
            <a href="#">Company 1</a>
            <a href="#">Company 2</a>
            <a href="#">Company 3</a>
          </div>
        </div>

        <div className="right">
          <a href="#">
            <CiLocationOn className="icon" />
            STORES
          </a>
          <a href="#">
            <RiFolderInfoFill className="icon" />
            CONTACT US
          </a>
          <a href="#">
            <IoPersonCircle className="icon" />
            LOG IN
          </a>
          <a href="#">
            <CiHeart className="icon" />
          </a>
          <a href="#">
            <IoBagRemoveOutline className="icon" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
