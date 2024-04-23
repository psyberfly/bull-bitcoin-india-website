'use client';
import React, { useState } from 'react';

function SubscribeForm() {
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false); // New state to track subscription status

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const response = await fetch(`${hostUrl}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (response.ok) {
        setIsSubscribed(true); // Set isSubscribed to true on successful subscription
        alert('Subscription successful!');
      } else {
        throw new Error(result.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Subscription failed:', error, email);
      alert("Failed to subscribe. Please try later.");
    } finally {
      closeDialog();
    }
  };

  return (
    <div>
      <p className="font-normal">
        <u style={{ cursor: 'pointer' }} onClick={openDialog}><b>Subscribe here</b></u> to become one of the first users!
      </p>
      {showDialog && (
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 100, border: '1px solid black' }}>
          <button style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={closeDialog}>✕</button>
          {isSubscribed ? (
            <h2 style={{ marginBottom: '5px', marginTop:"5px" }}>You have already subscribed!</h2>
          ) : (
            <React.Fragment>
              <h2 style={{ marginBottom: '5px', marginTop:"5px" }}>Subscribe to Bull Bitcoin India</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  style={{ border: '1px solid black', margin: "5px" }}
                />
                <button type="submit" style={{ backgroundColor: 'red', color: 'white', border: 'none', margin: "5px", padding: '5px 10px', cursor: 'pointer' }}>Submit</button>
              </form>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default SubscribeForm;
