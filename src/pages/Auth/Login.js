import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import './../../styles/AuthStyles.css';
//import { useAuth } from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [auth,setAuth]= useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://licensing.sr.flipr.ai/accounts/login/', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Login successful
        const responseData = response.data;
        toast.success('Logged out successfully',{duration:5000});
        // setAuth({
        //     ...auth,
        //     user: responseData.user,
        //     token: responseData.token,
        // });
        // localStorage.setItem('auth', JSON.stringify(responseData));
        navigate(location.state || '/dashboard');
      } else {
        // Handle other response statuses if needed
        toast.error(response.data && response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Incorrect email/password');
    }
  };

  return (
    <div>
      <Layout title="Register - Licensing App">
        <div className="form-container">
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  navigate('/accounts/forgot-password');
                }}
              >
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Login;