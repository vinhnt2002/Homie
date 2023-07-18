import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Payment() {
    const [vnp_Amount, setvnp_Amount] = useState(100000);
    const [bankCode, setBankCode] = useState('');
    const router = useRouter();
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Make a POST request to your API endpoint
      try {
        const response = await axios.post('/api/payment', { vnp_Amount});
        const { paymentUrl } = response.data;
  
        // Redirect the user to the payment URL
        window.location.href = paymentUrl;
      } catch (error) {
        console.error(error);
        // Handle any errors that occur during the payment process
      }
    };
  
    return (
      // <div>
      //   <h1>Payment Page</h1>
      //   <form onSubmit={handleSubmit}>
      //     <label>
      //       vnp_Amount:
      //       <input
      //         type="number"
      //         value={vnp_Amount}
      //         onChange={(e) => setvnp_Amount(e.target.value)}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       Bank Code:
      //       <input
      //         type="text"
      //         value={bankCode}
      //         onChange={(e) => setBankCode(e.target.value)}
      //       />
      //     </label>
      //     <br />
      //     <button type="submit">Pay Now</button>
      //   </form>
      // </div>

      <div className="content">
          <h3>Thanh Toán</h3>
          <div className="table-responsive">
            <form
            //  action="create_payment_url"
             method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Số tiền</label>
                <input
                  className="form-control"
                  type="text"
                  name="vnp_Amount"
                  placeholder="Số tiền"
                  value={vnp_Amount}
                />
              </div>

              <div className="form-group">
                <label>Chọn Phương thức thanh toán:</label>
                <div className="controls">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="bankCode"
                      id="defaultPaymentMethod"
                      value=""
                      checked
                    />{' '}
                    Cổng thanh toán VNPAYQR
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="bankCode"
                      id="vnpayqrPaymentMethod"
                      value="VNPAYQR"
                    />{' '}
                    Thanh toán qua ứng dụng hỗ trợ VNPAYQR
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="bankCode"
                      id="vnbankPaymentMethod"
                      value="VNBANK"
                    />{' '}
                    Thanh toán qua ATM-Tài khoản ngân hàng nội địa
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="bankCode"
                      id="intcardPaymentMethod"
                      value="INTCARD"
                    />{' '}
                    Thanh toán qua thẻ quốc tế
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Ngôn ngữ</label>
                <div className="controls">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="language"
                      id="vnLanguage"
                      value="vn"
                      checked
                    />{' '}
                    Tiếng việt
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="language"
                      id="enLanguage"
                      value="en"
                    />{' '}
                    Tiếng anh
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-default" id="btnPopup">
                Thanh toán
              </button>
            </form>
          </div>
          <p>&nbsp;</p>
        </div>
    );
  }
  