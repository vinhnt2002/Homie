import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const Signup = () => {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    imageURL:'/assets/images2/user.png',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', inputs);
      console.log(res);
      router.push('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <>
      <div className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>Tạo tài khoản</h3>
                  </div>
                  <form method="post">
                    <div className="form-group mb-3">
                      <input
                        onChange={handleChange}
                        type="text"
                        required
                        className="form-control"
                        name="username"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        onChange={handleChange}
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Nhập email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        onChange={handleChange}
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        onChange={handleChange}
                        className="form-control"
                        required
                        type="text"
                        name="imageURL"
                        placeholder="Nhập url anh dai dien"
                      />
                    </div>
                    <div className="login_footer form-group mb-3">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox2"
                            defaultValue
                          />
                          {/* <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox2"
                          >
                            <span>Tôi đồng ý với điều khoản &amp; chính sách .</span>
                          </label> */}
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="register"
                      >
                        Đăng kí
                      </button>
                      {error && <p>{error}</p>}
                      <span>
                        Do you have an account?
                        <Link href="/login">Login</Link>
                      </span>
                    </div>
                  </form>
                  <div className="different_login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login list_none text-center">
                    <li>
                      <button className="btn btn-facebook text-white" 
                      onClick={() => {signIn('facebook', { callbackUrl: 'http://localhost:3000' })}}>
                        <i className="ion-social-facebook" />
                        Facebook
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-google text-white"
                        onClick={() => {
                          signIn("google", {
                            callbackUrl: "http://localhost:3000",
                          });
                        }}
                      >
                        <i className="ion-social-googleplus" />
                        Google
                      </button>
                    </li>
                  </ul>
                  <div className="form-note text-center">
                    Đã có tài khoản?
                    <Link href="/login"> Đăng nhập ngay</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
