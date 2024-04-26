import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './compenents/Login';
import Register from './compenents/Register';
import Profile from './compenents/Profile';
import Product from './compenents/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './compenents/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    <Route path='/profile' element={<Profile/>}/>

      </Routes>
      <Product />

    </div>
  );
}

export default App;
