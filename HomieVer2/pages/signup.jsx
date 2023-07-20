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
    image:'',
    
    
  });
  const router = useRouter();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!inputs.username.match(/^(?=.{4,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)) {
        setError('Username invalid, it should contain 4-40 alphanumeric letters, non-blank, and be unique!');
      }
       else if (inputs.password.length < 4 || inputs.password.length > 20) {
        setError('Password must be between 4 and 20 characters');
      } 
      else {
        const res = await axios.post('/api/auth/register', inputs);
        console.log(res);
        if (res.data.userExists) {
          setError('User already exists'); // Set specific error message for user existence
        } else {
          router.push('/login');
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred, please make sure email not existed');
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
                        placeholder="Nhập tên đăng nhập"
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
                        name="image"
                        placeholder="Nhập url ảnh đại diện"
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
                      
                    </div>
                  </form>
                  <div className="different_login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login list_none text-center">
                    <li>
                      <button className="btn btn-facebook text-white" 
                      onClick={() => {signIn('facebook', { callbackUrl: `${process.env.NEXTAUTH_URL}` })}}>
                        <i className="ion-social-facebook" />
                        Facebook
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-google text-white"
                        onClick={() => {
                          signIn("google", {
                            callbackUrl: `${process.env.NEXTAUTH_URL}`,
                          });
                        }}
                      >
                        <i className="ion-social-googleplus" />
                        Google
                      </button>
                    </li>
                  </ul>
                  <div className="form-note text-center">
                    Chưa có tài khoản?
                    <Link href="login">
                      <h10 style={{ font: "roboto", color: "#F79C43" }}>
                        {" "}
                        Đăng nhập ngay
                      </h10>
                    </Link>{" "}
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
