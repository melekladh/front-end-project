import React, { useRef } from 'react'
import { UserRegister } from '../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
// import "../css/register.css"
const Register = () => {
  const email=useRef()
  const password=useRef()
const dispatch=useDispatch()
const {error}=useSelector(state=>state.user)
  return (

     <div className='input-form' style={{width:'20%', backgroundColor:'yellow',borderRadius:50,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px',color:'blue'}}>
     <input type='email' placeholder='type your email' ref={email}></input>
   <input type='password' placeholder='type your password'ref={password}></input>
     <button onClick={()=>dispatch(UserRegister({
       email:email.current.value,
       password:password.current.value
        }))}>register</button>
     {error&& <h1>{error}</h1>}


   </div>
  )
}

export default Register