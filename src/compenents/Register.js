import React, { useRef } from 'react'; // Importing React and useRef hook from react
import { UserRegister } from '../redux/slices/userSlice'; // Importing UserRegister action from userSlice
import { useDispatch, useSelector } from 'react-redux'; // Importing necessary hooks from react-redux for interacting with Redux store
import "../css/register.css"; // Importing CSS file for styling

const Register = () => {
  // Creating ref for email and password inputs
  const email = useRef();
  const password = useRef();

  // Accessing dispatch function for dispatching actions to Redux store
  const dispatch = useDispatch();
  
  // Extracting error state from Redux store
  const { error } = useSelector(state => state.user);

  return (
    // Register form
    <div className='container' style={{ width: '100%' }}>
      <div className='inputs'>
        {/* Email input field */}
        <div>EMAIL</div>
        <input type='email' ref={email}></input>
        
        {/* Password input field */}
        <div>PASSWORD</div>
        <input type='password' ref={password}></input>
        
        {/* Register button */}
        <button onClick={() => dispatch(UserRegister({ // Dispatching UserRegister action with email and password
          email: email.current.value, // Getting email value from ref
          password: password.current.value // Getting password value from ref
        }))}>
          REGISTER
        </button>
        
        {/* Displaying error message if there's any */}
        {error && <h5>{error}</h5>}
      </div>
    </div>
  );
};

export default Register;
