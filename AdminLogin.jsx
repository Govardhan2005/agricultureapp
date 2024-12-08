import { useState } from 'react'
import { FaUser , FaLock} from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';

export default function AdminLogin() 
{

  const [formData, setFormData] = useState({
    auname: '',
    apwd: '',
  });
  
  const [message,setMessage] = useState('')
  const [error,setError] = useState('')

  const navigate = useNavigate();

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => 
{
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/admin/checkadminlogin`,formData);
      if (response.data!=null) 
      {
        
        navigate("/admin")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div>
      <div>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
        <form  onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
            <div className='input-box'>
               <input  type="text"  name="auname" placeholder='Enter Username'  value={formData.auname} onChange={handleChange} required/>
               <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" name="apwd" placeholder='Enter Password' value={formData.apwd} onChange={handleChange} required />
                <FaLock className='icon' />

            </div>

            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember Me</label>
                
                <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>

        </form>

      </div>
    </div>
  )
}