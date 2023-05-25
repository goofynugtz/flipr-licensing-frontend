import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './../../styles/AuthStyles.css';
import axios from "axios";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://licensing.sr.flipr.ai/accounts/signup/', {
        name,
        email,
        password,
        organization,
        phone,
        address,
      });

      if ((res.status === 208)) {
        toast.error('Already exists');
      } else if ((res.status === 201) || (res.status === 200) ){
        toast.success('A verification email has been sent to you.After clicking on it, proceed to the login tab.');
      }
    } catch (error) {
      //console.log(error);
      toast.error('Something went wrong');
    }
  };


  return (
    <Layout title="Register - Licensing Api">
      <div className="form-container">
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit}>
          {/* Rest of the form inputs */}
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
              required
            />
          </div>

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
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="form-control"
              id="exampleInputOrganization1"
              placeholder="Enter Your Organization"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              //required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              //required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
