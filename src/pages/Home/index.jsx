import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import Banner from 'components/Banner';
import { Outlet, Route, Routes } from 'react-router-dom';
import Products from 'features/Products';

function Home(props) {
  return (
    <div className="home">
      <div className="container">
        <Banner />
        <Routes>
          <Route index element={<Products />}></Route>
        </Routes>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
