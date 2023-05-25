import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './../../styles/AuthStyles.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://licensing.sr.flipr.ai/accounts/forgot-password/', {
        email
      });

      if ((res.status === 200)) {
        toast.success('Reset link has been sent on email.');
      } else {
        toast.error('Email not found.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div>
      <Layout title="Forgot-Password - Licensing App">
        <div className="form-container">
          <h1>Forgot Password</h1>
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

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default ForgotPassword;
