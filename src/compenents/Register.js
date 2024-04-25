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

    <div>
      



      {/* <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email"></input>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"></input>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div> */}
     <div>
     <input type='email' placeholder='type your email' ref={email}></input>
   <input type='password' placeholder='type your password'ref={password}></input>
     <button onClick={()=>dispatch(UserRegister({
       email:email.current.value,
       password:password.current.value
        }))}>register</button>
     {error&& <h1>{error}</h1>}
   

   </div>
    </div>
  )
}

export default Register