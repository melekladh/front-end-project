import React from 'react';
import { useRef } from 'react'; // Importing useRef hook from react
import { useDispatch, useSelector } from 'react-redux'; // Importing necessary hooks from react-redux for interacting with Redux store
import { UserLogin } from '../redux/slices/userSlice'; // Importing UserLogin action from userSlice

const Login = () => {
  // Creating ref for email and password inputs
  const email = useRef();
  const password = useRef();

  // Accessing dispatch function for dispatching actions to Redux store
  const dispatch = useDispatch();
  
  // Extracting error state from Redux store
  const { error } = useSelector(state => state.user);

  return (
    // Login form
    <div className='container' style={{ width: '100%' }}>
      <div className='inputs'>
        {/* Email input field */}
        <div>EMAIL</div>
        <input type='email' ref={email}></input>
        
        {/* Password input field */}
        <div>PASSWORD</div>
        <input type='password' ref={password}></input>
        
        {/* Login button */}
        <button onClick={() => dispatch(UserLogin({ // Dispatching UserLogin action with email and password
          email: email.current.value, // Getting email value from ref
          password: password.current.value // Getting password value from ref
        }))}>
          LOGIN
        </button>
        
        {/* Displaying error message if there's any */}
        {error && <h5>{error}</h5>}
      </div>
    </div>
  );
};

export default Login;
