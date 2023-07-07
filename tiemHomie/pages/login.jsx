import Link from "next/link";
import React from "react";
import { signIn, signOut } from "next-auth/react";



const login = () => {
  return (
    <>
      <div className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>Login</h3>
                  </div>
                  <form method="post">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="login_footer form-group mb-3">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox1"
                            defaultValue
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>Ghi nhớ</span>
                          </label>
                        </div>
                      </div>
                      <a href="#">Quên mật khẩu?</a>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                      >
                        Đăng nhập
                      </button>
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
                        onClick={() => {signIn("google", { callbackUrl: 'http://localhost:3000' })}}
                      >
                        <i className="ion-social-googleplus" />
                        Google
                      </button>
                    </li>
                  </ul>
                  <div className="form-note text-center">
                    Chưa có tài khoản?
                    <Link href="signup"> Đăng kí ngay</Link>
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

export default login;
