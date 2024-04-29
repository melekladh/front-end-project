import React from 'react'
import { useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { UserLogin } from '../redux/slices/userSlice'
const Login = () => {
  const email=useRef()
  const password=useRef()
const dispatch=useDispatch()
const {error}=useSelector(state=>state.user)
  return (
    <div className='container' style={{width:'100%'}}>
		<div className='inputs'>
			<div>EMAIL</div>
			 <input type='email'  ref={email}></input>
			 <div>PASSWORD</div>

   <input type='password' ref={password}></input>
     <button onClick={()=>dispatch(UserLogin({
       email:email.current.value,
       password:password.current.value
        }))}>LOGIN</button>
     {error&& <h5>{error}</h5>}
		</div>
    
   </div>
  )
}

export default Login