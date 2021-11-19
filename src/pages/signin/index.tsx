import type { NextPage } from "next";
import Link from "next/link";

const SignIn: NextPage = () => {
  return (
    <div>
      <section className="shopasia-main-body shopasia-signin-main">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center vh-100">
            <div className="landing-page shadow-sm bg-success col-lg-6">
              <div className="shopasia-slider m-0 slick-initialized slick-slider slick-dotted">
                <div className="slick-list draggable">
                  <div className="slick-track">
                    <div
                      className="shopasia-slider-item text-center slick-slide slick-cloned"
                      data-slick-index="5"
                      id=""
                      aria-hidden="true"
                    >
                      <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                        <i className="icofont-support-faq display-1 text-warning"></i>
                        <h4 className="my-4 text-white">Easy Returns</h4>
                        <p className="text-center text-white-50 mb-5 px-4">
                          Not satisfied with a product? Return
                          <br /> it at the doorstep &amp; get a refund within
                          hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="shopasia-signin shadow-sm bg-white p-4 round">
                <div className="p-3">
                  <h2 className="my-0">Welcome Back</h2>
                  <p className="small mb-4">Sign in to Continue.</p>
                  <form action="">
                    <div className="form-group mb-3">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input
                        placeholder="Enter Email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        placeholder="Enter Password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-lg round btn-block w-100"
                    >
                      Sign in
                    </button>
                  </form>
                  <p className="text-muted text-center small m-0 py-3">or</p>
                  <a
                    href="verification.html"
                    className="btn btn-dark btn-block round btn-lg btn-apple w-100"
                  >
                    <i className="icofont-brand-apple mr-2"></i> Sign up with
                    Apple
                  </a>
                  <a className="btn btn-light border btn-block round btn-lg btn-google w-100 mt-2">
                    <i className="icofont-google-plus text-danger mr-2"></i>
                    Sign up with Google
                  </a>
                  <p className="text-center mt-3 mb-0">
                    <Link href="signup">
                      <a className="text-dark">
                        Don't have an account? Sign up
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
