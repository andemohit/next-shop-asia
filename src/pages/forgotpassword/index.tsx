import type { NextPage } from "next";

const ForgotPassword: NextPage = () => {
  return (
    <section className="shopasia-main-body">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center vh-100">
          <div className="col-lg-6">
            <div className="shopasia-verification shadow bg-white p-4 round">
              <div className="shopasia-form p-3 text-center mt-3">
                <h2>Forgot Password</h2>
                <p>Enter your registered email id</p>

                <form action="#">
                  <div className="row my-5 px-5">
                    <div className="col px-2">
                      <input
                        type="text"
                        placeholder="Enter Email id"
                        className="form-control opt form-control-lg text-center"
                      />
                    </div>
                  </div>

                  <button className="btn btn-success btn-block btn-lg">
                    Send
                  </button>
                  <p className="mt-2">
                    <a href="#" className="text-decoration-none text-success">
                      Resend Code
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
