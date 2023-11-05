import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
