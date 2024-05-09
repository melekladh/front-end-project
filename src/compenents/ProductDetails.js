import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductsDetails = () => {
  const params = useParams();
  const location = useLocation();

  // Check if location.state.productData exists before accessing its properties
  const productData = location.state?.productData;

  return (
    <>
      {productData && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={productData.image} />
          <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{productData.price}</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      )}
      <div>{params.title}</div>
    </>
  );
};

export default ProductsDetails;
