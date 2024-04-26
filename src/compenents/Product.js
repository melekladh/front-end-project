import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/slices/productSlice';
const Product = () => {
  const dispatch=useDispatch()
const {productData}=useSelector(state=>state.products)
  useEffect(() => {
    // fetch('http://localhost:9000/api/product/getproduct')
    //   .then(response => response.json())
    //   .then(data => setProducts(data));
dispatch(getProduct())
    
  }, []);
  
  return (
    <div className="product-page" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', 
    'box-shadow': '5px  5px 20px 1px #757676'  }} >
          {productData.map(product => (
            
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
          ))}
       
        </div>

  )
}

export default Product