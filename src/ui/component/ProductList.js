import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { opertions, selectors } from '../store/features/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { token, productData } = useSelector((state) => ({
    token: selectors.token(state),
    productData: selectors.product(state)
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postLogin = opertions.dispatchGetProductData(dispatch);

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    } else {
      postLogin(token);
    }
  }, [token]);

  useEffect(() => {
    if (productData) {
      setProducts([...productData]);
    }
  }, [productData]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
