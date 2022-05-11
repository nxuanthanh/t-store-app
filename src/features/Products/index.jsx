import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';
import ProductsFilter from './components/ProductsFilters';
import FilterViewer from './components/FilterViewer';
import ProductList from './components/ProductList';

function Products(props) {
  return (
    <div className="product">
      <div className="product__filter">
        <ProductsFilter />
      </div>
      <div className="product__content">
        <div className="product__filter-viewer">
          <FilterViewer />
        </div>
        <div className="product__list">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {};

export default Products;
