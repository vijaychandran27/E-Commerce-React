import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import AddProduct from './component/AddProduct';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}  exact/>
          <Route path="/login" element={<Login />} exact/>
          <Route path="/products" element={<ProductList/>} exact/>
          <Route path="/products/:productId" element={<ProductDetails/>} exact/>
          <Route path="/add" element={<AddProduct/>} exact/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;