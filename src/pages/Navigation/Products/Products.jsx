// src/pages/Navigation/Products/Products.jsx

import React from 'react';
import './Products.css'; // You will style it in this file

const Products = () => {
  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Explore the range of quality products we offer for your construction needs.</p>
      </header>

      <section className="product-list">
        {/* You can map through your products array to render them dynamically */}
        <div className="product-item">
          <img src="path_to_product_image" alt="Product Name" />
          <h3>Product Name</h3>
          <p>Description of the product goes here.</p>
          <button className="btn-buy">Buy Now</button>
        </div>
        
        {/* Repeat the structure for other products */}
      </section>
    </div>
  );
}

export default Products;
