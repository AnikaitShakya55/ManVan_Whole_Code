import React from 'react';
import { useParams } from 'react-router-dom';
import { productsArr } from './ProductArr'; // Assuming you have an external array of products
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();

  const product = productsArr.find(item => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
