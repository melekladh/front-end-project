import React, { useRef } from 'react'; // Importing React and useRef hook from react
import { UserRegister } from '../redux/slices/userSlice'; // Importing UserRegister action from userSlice
import { useDispatch, useSelector } from 'react-redux'; // Importing necessary hooks from react-redux for interacting with Redux store

// const Register = () => {
//   

//   return (
//     // Register form
//     <div className='container' style={{ width: '100%' }}>
//       <div className='inputs'>
//         {/* Email input field */}
//         <div>EMAIL</div>
//         <input type='email' ></input>
        
//         {/* Password input field */}
//         <div>PASSWORD</div>
//         <input type='password' ></input>
        
//         {/* Register button */}
        // <button onClick={() => dispatch(UserRegister({ // Dispatching UserRegister action with email and password
        //   email: email.current.value, // Getting email value from ref
        //   password: password.current.value // Getting password value from ref
        // }))}>
        //   REGISTER
        // </button>
        
//         {/* Displaying error message if there's any */}
//         {error && <h5>{error}</h5>}
//       </div>
//     </div>
//   );
// };

// export default Register;

export default function Register() {
  // Creating ref for email and password inputs
  const email = useRef();
  const password = useRef();

//   // Accessing dispatch function for dispatching actions to Redux store
  const dispatch = useDispatch();
  
//   // Extracting error state from Redux store
  const { error } = useSelector(state => state.user);
  return (
    <>
     
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                ref={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  
                </div>
              </div>
              <div className="mt-2">
                <input
                ref={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <button
  type="submit"
  onClick={(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    dispatch(UserRegister({ // Dispatching UserRegister action with email and password
      email: email.current.value, // Getting email value from ref
      password: password.current.value // Getting password value from ref
    }));
  }}
  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  Sign up
</button>
              {error && <h5>{error}</h5>}
            </div>
          </form>

          
        </div>
      </div>
    </>
  )
}
