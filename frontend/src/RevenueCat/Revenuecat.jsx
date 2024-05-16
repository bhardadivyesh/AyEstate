import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExampleComponent = () => {
  const [isProUser, setIsProUser] = useState(false);
  const navigate = useNavigate();
  let data = {
    userId: 'user123',
    isPro : true
  }

  useEffect(() => {
    async function fetchSubscriptionStatus() {
      try {
        const response = await axios.post('http://localhost:3000/create-user', data);
        console.log('Response:', response);
        setIsProUser(response.data.success);
      } catch (error) {
        console.error('Error fetching subscription status:', error);
      }
    }
    fetchSubscriptionStatus();
  }, []);

  if (isProUser) {
    navigate("/adminDashboard");
  }

  return (
    <div>
      {isProUser ? (
        <p>You are a Pro user.</p>
      ) : (
        <p>You are not a Pro user. Subscribe now!</p>
      )}
    </div>
  );
};

export default ExampleComponent;
