import React from 'react';
import './collection.css';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import All from '../all/All';
import Men from '../men/Men';
import Women from '../women/Women';
import Accessories from '../accessories/Accessories';
import Recommend from '../recomended/Recommend';

function Collection() {
 
  return (
    <Router>
      <div>
        <div className='trend'>
          <h2>TRENDING COLLECTIONS</h2>
        </div>
        <nav>
          <ul className='navv'>
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/all" element={<All />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
        <Recommend />
      </div>
    </Router>

  );

}

export default Collection;
