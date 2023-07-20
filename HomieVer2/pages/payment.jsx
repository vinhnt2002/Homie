import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Payment() {
    const [amount, setAmount] = useState(0);
    const [bankCode, setBankCode] = useState('');
    const router = useRouter();
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Make a POST request to your API endpoint
      try {
        const response = await axios.post('/api/payment', { amount ,bankCode});
        const { paymentUrl } = response.data;
  
        // Redirect the user to the payment URL
        window.location.href = paymentUrl;
      } catch (error) {
        console.error(error);
        // Handle any errors that occur during the payment process
      }
    };
  
    return (
      <div>
        <h1>Payment Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <label>
            Bank Code:
            <input
              type="text"
              value={bankCode}
              onChange={(e) => setBankCode(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    );
  }
  