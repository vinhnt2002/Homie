import Link from "next/link";
import React from "react";

const signup = () => {
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
                        type="text"
                        required
                        className="form-control"
                        name="name"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Nhập email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Nhập lại mật khẩu"
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
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox2"
                          >
                            <span>Tôi đồng ý với điều khoản &amp; chính sách .</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="register"
                      >
                        Đăng kí
                      </button>
                    </div>
                  </form>
                  <div className="different_login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login list_none text-center">
                    <li>
                      <a href="#" className="btn btn-facebook">
                        <i className="ion-social-facebook" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-google">
                        <i className="ion-social-googleplus" />
                        Google
                      </a>
                    </li>
                  </ul>
                  <div className="form-note text-center">
                    Đã có tài khoản? <Link href="login">Đăng nhập</Link>
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

export default signup;
