import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit,
  });
  async function onSubmit(values) {
    try {
      // Perform sign-in
      const status = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      // console.log(status);
      if (status.ok) {
        toast.success("Đăng nhập thành công!", {
          onClose: () => {
            router.push(status.url);
          },
        });
      } else if (values.password.includes(" ")) {
        setError("Mật khẩu không được để trống!!!");
      } else {
        setError("Email hoặc mật khẩu bị sai!!!");
      }
    } catch (error) {
      setError("An error occurred.");
    }
  }

  async function signInWithProvider(provider) {
    try {
      const status = await signIn(provider, {
        callbackUrl: "/",
      });

      if (status.ok) {
        toast.success(`Đăng nhập với ${provider} thành công!`, {
          onClose: () => {
            router.push(status.url);
          },
        });
      }
    } catch (error) {
      console.error("Error logging in with provider:", error);
    }
  }

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
                  <form method="post" onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-3 ">
                      <div
                        className={`  ${
                          formik.errors.email && formik.touched.email
                            ? "border-rose-600"
                            : ""
                        }`}
                      >
                        <input
                          type="email"
                          required
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          {...formik.getFieldProps("email")}
                        />
                        <span className="icon flex items-center px-4">
                        </span>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div
                        className={`  ${
                          formik.errors.password && formik.touched.password
                            ? "border-rose-600"
                            : ""
                        }`}
                      >
                        <input
                          className="form-control"
                          required
                          type={`${show ? "text" : "password"}`}
                          name="password"
                          placeholder="Password"
                          {...formik.getFieldProps("password")}
                        />
                        <span
                          className="icon flex items-center px-4"
                          onClick={() => setShow(!show)}
                        >
                        </span>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                      >
                        Đăng nhập
                      </button>
                      {error && <p>{error}</p>}
                    </div>
                  </form>

                  <div className="different_login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login list_none text-center">
                    <li>
                      <button
                        className="btn btn-facebook text-white"
                        onClick={() => signInWithProvider("facebook")}
                      >
                        <i className="ion-social-facebook" />
                        Facebook
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-google text-white"
                        onClick={() => signInWithProvider("google")}
                      >
                        <i className="ion-social-googleplus" />
                        Google
                      </button>
                    </li>
                  </ul>
                  <div className="form-note text-center">
                    Chưa có tài khoản?
                    <Link href="signup">
                      <h10 style={{ font: "roboto", color: "#F79C43" }}>
                        {" "}
                        Đăng kí ngay
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
}
