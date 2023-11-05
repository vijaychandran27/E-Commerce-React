import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ name: '', description: '', price: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    onAddProduct(product);
    setProduct({ name: '', description: '', price: 0 });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={product.description}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={product.price}
        onChange={handleInputChange}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
