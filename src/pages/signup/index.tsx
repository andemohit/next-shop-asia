import type { NextPage } from "next";
import Link from "next/link";

const SignUp: NextPage = () => {
  return (
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
            <div className="shopasia-signup shadow bg-white p-4 round">
              <div className="p-3">
                <h2 className="my-0">Let's get started</h2>
                <p className="small mb-4">
                  Create account to see our top picks for you!
                </p>
                <form action="">
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input
                      placeholder="Enter Name"
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputNumber1">Phone Number</label>
                    <input
                      placeholder="Enter Phone Number"
                      type="number"
                      className="form-control"
                      id="exampleInputNumber1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      placeholder="Enter Email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      placeholder="Enter Password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">
                      Confirmation Password
                    </label>
                    <input
                      placeholder="Enter Confirmation Password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success round btn-lg btn-block"
                  >
                    Create Account
                  </button>
                </form>
                <p className="text-muted text-center small py-2 m-0">or</p>
                <a
                  href="verification.html"
                  className="btn btn-dark btn-block round btn-lg btn-apple"
                >
                  <i className="icofont-brand-apple mr-2"></i> Sign up with
                  Apple
                </a>
                <a
                  href="verification.html"
                  className="btn btn-light border btn-block round btn-lg btn-google mt-2"
                >
                  <i className="icofont-google-plus text-danger mr-2"></i> Sign
                  up with Google
                </a>
                <p className="text-center mt-3 mb-0">
                  <a href="signin.html" className="text-dark">
                    Already have an account! Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
