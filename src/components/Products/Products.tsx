import React, { useEffect, useState } from 'react';
import { products as staticProducts } from './consts';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from './types';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:8000/products');
      const data = await response.json();

      setProducts(data);
    };

    console.log('fetchProducts!');

    fetchProducts();
  }, []);

  console.log('inputValue:', inputValue);

  return (
    <>
      <h1 className='heading'>Products</h1>

      <input
        value={inputValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setInputValue(e.currentTarget.value);
        }}
        style={{
          width: '90%',
          height: 30,
          padding: 15,
          maxWidth: '600px',
          display: 'block',
          margin: '20px auto 0',
        }}
      />

      <div className='productsList'>
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
