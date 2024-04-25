import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigation = () => {
  const {isAuth}=useSelector(state=>state.user)
  const dispatch=useDispatch()



  
  return (
//     <>
//     {isAuth?
//     <><Link to='/profile' >profile</Link>
//         <button   onClick={()=> dispatch(logout()) } >logout</button>
//     </>:
//         <>
      
//    <Link to='/login' >login</Link>
//     <Link to='/register' >register</Link>
//     </>
//   }
 
// </>

<Navbar expand="lg" className="bg-body-tertiary" style={{position: 'sticky', zIndex: 1000, top:'0px'}}>
<Container>
  <Navbar.Brand href="#home">Ecomern </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      {
        isAuth? <>
        <Nav.Link href='/profile'>profile</Nav.Link>
      <Nav.Link  onClick={()=> dispatch(logout()) }>logout</Nav.Link>
     
        </>:<div style={{display:'flex', justifyContent:'flex-end'}}>

        <Nav.Link  href='/login'>login</Nav.Link>
      <Nav.Link href='/register'>register</Nav.Link>
             </div>

      }

     
     
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default Navigation