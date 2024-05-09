import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing necessary hooks from react-redux for interacting with Redux store
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import { logout } from '../redux/slices/userSlice'; // Importing logout action from userSlice

import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap for layout
import Nav from 'react-bootstrap/Nav'; // Importing Nav component from react-bootstrap for navigation
import Navbar from 'react-bootstrap/Navbar'; // Importing Navbar component from react-bootstrap for navigation

const Navigation = () => {
  // Extracting isAuth state from Redux store
  const { isAuth } = useSelector(state => state.user);
  // Accessing dispatch function for dispatching actions to Redux store
  const dispatch = useDispatch();

  return (
    // Navbar component for navigation, using Bootstrap styles
    <Navbar expand="lg" className="bg-body-tertiary" style={{ position: 'absolute', zIndex: 1000, top: '0px', display:"flex",justifyContent:"space-around" }}>
      <Container>
        <Link to='/' style={{textDecoration:"none"}}>Ecomern</Link> {/* Navbar brand */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for responsive behavior */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              // Conditional rendering based on authentication status
              isAuth ? (
                // If user is authenticated, render profile link and logout button
                <>
                  <Link to='/profile' style={{ textDecoration: 'none' }}>profile</Link> {/* Profile link */}
                  <button onClick={() => dispatch(logout())}> {/* Logout button */}
                    Log out
                  </button>
                </>
              ) : (
                // If user is not authenticated, render login and register links
                <div >
                  <Link to='/login' style={{ textDecoration: 'none' }}>login</Link> {/* Login link */}
                  <Link to='/register' style={{ textDecoration: 'none' }}>register</Link> {/* Register link */}
                  <Link to='/cart' style={{ textDecoration: 'none' }}>cart</Link> {/* Cart link */}

                </div>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
