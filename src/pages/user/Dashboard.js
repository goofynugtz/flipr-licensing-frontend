import React, { useEffect, useState } from 'react';
import LayoutDash from './../../components/Layout/Layout-Dash';
import './../../styles/dashboard.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const [access, setAccess] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://licensing.sr.flipr.ai/accounts/login/', {
          email: state?.email,
          password: state?.password,
        });

        if (response.status === 200) {
          const responseData = response.data;
          setAccess(responseData.access);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [state?.email, state?.password]);

  const handleNewPolicy = () => {
    toast.dismiss(); // Dismiss any active toast messages
  
    // Create a promise-based toast that resolves immediately
    const promise = new Promise((resolve) => resolve());
  
    // Show the promise-based toast and handle the resolution
    toast.promise(promise, {
      loading: 'Navigating...', // Optional loading message
      success: 'Navigation successful!', // Optional success message
      error: 'Navigation failed!', // Optional error message
    }).then(() => {
      //const modifiedAccess = `Bearer ${access}`; // Modify the access value
      
      navigate('/api/issue', {
        state: {access}, // Pass the modified access value as state
      });
    });
  };
  
  

  return (
    <LayoutDash title={'User Dashboard'}>
      <div className="container">
        <h1 className="title">User Dashboard</h1>
        {/*<div className="access-box">
          <p className="access-token">Access Token: {access}</p>
  </div>*/}
        <button className="button" type="button" onClick={handleNewPolicy}>
          New License
        </button>
      </div>
    </LayoutDash>
  );
};

export default Dashboard;
