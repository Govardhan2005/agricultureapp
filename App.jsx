import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FarmersInfo from './components/FarmersInfo';
import BuyersInfo from './components/BuyersInfo';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Order from './components/Orders';
import Market from './components/Market';
import Support from './components/Support';
import Vegetables from './components/Vegetables';
import Dairy from './components/Dairy';
import Spices from './components/Spices';
import FarmerLogin from './components/FarmerLogin';
import FarmerRegister from './components/FarmerRegister';
import BuyerRegister from './components/BuyerRegister';
import BuyerLogin from './components/BuyerLogin';
import AdminLogin from './components/AdminLogin';


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmers-info" element={<FarmersInfo />} />
        <Route path="/buyers-info" element={<BuyersInfo />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/vegetables' element={<Vegetables/>}/>
        <Route path='/dairy' element={<Dairy/>}/>
        <Route path='/spices' element={<Spices/>}/>
        <Route path='/farmer-login' element={<FarmerLogin/>}/>
        <Route path='/farmer-register' element={<FarmerRegister/>}/>
        <Route path='/buyer-register' element={<BuyerRegister/>}/>
        <Route path='/buyer-login' element={<BuyerLogin/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
