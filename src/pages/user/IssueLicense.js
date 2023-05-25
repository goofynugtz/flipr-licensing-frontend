import React, { useEffect, useState } from 'react';
import LayoutDash from '../../components/Layout/Layout-Dash';
import './../../styles/dashboard.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const IssueLicense = () => {
  const location = useLocation();
  const { state } = location;

  // Extract the access token from the state
  const access = state && state.access;
  const [accessToken, setAccessToken] = useState('');
  const [policyName, setPolicyName] = useState('');
  const [policy, setPolicy] = useState('');

  useEffect(() => {
    setAccessToken(access);
  }, [access]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create the request body
    const requestBody = {
      name: policyName,
      policy: policy,
    };

    // Create the request headers
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.post('https://licensing.sr.flipr.ai/api/issue/', requestBody, {
        headers: headers,
      });

      if (response.status === 201) {
        // Handle the success response
        console.log('License key has been mailed.');
        toast.success('License key has been mailed.',{duration:5000});
      }
    } catch (error) {
      // Handle the error
      console.log(error);
      toast.error('Error');
    }
  };

  return (
    <LayoutDash title={'Issue Policy'}>
      <div className="form-container">
        <h1 className="title">Issue License</h1>
        {/*<div className="access-box">
          <p className="access-token">Access Token: {accessToken}</p>
  </div>*/}
        <form onSubmit={handleFormSubmit}>
          {/*<div className="form-group">
            <label htmlFor="policyName">Policy Name:</label>
            <input
              type="text"
              id="policyName"
              value={policyName}
              onChange={(e) => setPolicyName(e.target.value)}
            />
</div>*/}
          <div className="mb-3">
              <input
                type="text"
                value={policyName}
                onChange={(e) => setPolicyName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="License Name..."
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={policy}
                onChange={(e) => setPolicy(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Policy..."
                required
              />
            </div>
          {/*<div className="form-group">
            <label htmlFor="policy">Policy:</label>
            <textarea
              id="policy"
              value={policy}
              onChange={(e) => setPolicy(e.target.value)}
            />
</div>*/}
          <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
        </form>
      </div>
    </LayoutDash>
  );
};

export default IssueLicense;
