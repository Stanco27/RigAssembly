import React from 'react'
import { Card } from 'react-bootstrap'
import './ProductPage.css'

interface Product {
    name: string,
    price: number,
    image: string
}

interface ProductCardsProps {
    product: Product;
}

const ProductCards: React.FC<ProductCardsProps> = ({ product }) => {
  return (
    <Card className='product-card'>
        <div className='image-container'>
        <img src={product.image}/>
        </div>
        <Card.Title className='product-title'>{product.name}</Card.Title>
        <Card.Text className='product-price'>${product.price}</Card.Text>
    </Card>
  )
}

export default ProductCards