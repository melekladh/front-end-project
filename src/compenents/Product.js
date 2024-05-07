import React, { useEffect } from 'react'; // Importing React, useEffect hooks from react
import Button from 'react-bootstrap/Button'; // Importing Button component from react-bootstrap
import Card from 'react-bootstrap/Card'; // Importing Card component from react-bootstrap
import { useDispatch, useSelector } from 'react-redux'; // Importing necessary hooks from react-redux for interacting with Redux store
import { getProduct } from '../redux/slices/productSlice'; // Importing getProduct action from productSlice
import { Link } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch(); // Accessing dispatch function for dispatching actions to Redux store
  const { productData } = useSelector(state => state.products); // Extracting productData state from Redux store

  useEffect(() => {
    // Fetching product data when the component mounts
    dispatch(getProduct());
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    // Displaying product cards in a flexbox layout

    <div className="product-page" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
  {/* Mapping through productData and rendering product cards */}
  {productData.map(product => (
    <Link to={`/products/${product.title}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} /> {/* Product image */}
        <Card.Body>
          <Card.Title>{product.title}</Card.Title> {/* Product title */}
          <Card.Text>{product.price}</Card.Text> {/* Product price */}
          <Button variant="primary">Add to cart</Button> {/* Button to add product to cart */}
        </Card.Body>
      </Card>
    </Link>
  ))}
</div>


  );
};

export default Product;
