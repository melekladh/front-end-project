import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './compenents/Login';
import Register from './compenents/Register';
import Profile from './compenents/Profile';
import Product from './compenents/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './compenents/Navigation';
import ProductsDetails from './compenents/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navigation/>

      <Routes>
      <Route path='/' element={<Product />} />

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/products' element={<Product />}/>

    <Route path='/products/:title' element={<ProductsDetails/>}/>

      </Routes>

    </div>
  );
}

export default App;
