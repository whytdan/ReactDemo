import React, { FC } from 'react';
import { Product } from '../Products/types';
import './ProductCard.css';

type ProductCardProps = {
  data: Product;
};

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  // const { data } = props;

  const { title, image, price, description } = data;

  return (
    <div className='productCard'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>{price}$</p>
    </div>
  );
};

export default ProductCard;
