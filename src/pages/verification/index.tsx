import type { NextPage } from "next";

const OtpVerfication: NextPage = () => {
  return (
    <section className="shopasia-main-body">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center vh-100">
          <div className="col-lg-6">
            <div className="shopasia-verification shadow bg-white p-4 round">
              <div className="shopasia-form p-3 text-center mt-3">
                <h2>Verify your number</h2>
                <p>Enter the 4-digit code we sent to you</p>
                <p>98*** ***76</p>
                <form action="#">
                  <div className="row my-5 px-5">
                    <div className="col px-2">
                      <input
                        type="text"
                        placeholder="0"
                        className="form-control opt form-control-lg text-center"
                      />
                    </div>
                    <div className="col px-2">
                      <input
                        type="text"
                        placeholder="0"
                        className="form-control opt form-control-lg text-center"
                      />
                    </div>
                    <div className="col px-2">
                      <input
                        type="text"
                        placeholder="0"
                        className="form-control opt form-control-lg text-center"
                      />
                    </div>
                    <div className="col px-2">
                      <input
                        type="text"
                        placeholder="0"
                        className="form-control opt form-control-lg text-center"
                      />
                    </div>
                  </div>
                  <p>
                    <a href="#" className="text-decoration-none text-success">
                      Resend Code
                    </a>
                  </p>

                  <button className="btn btn-success btn-block btn-lg">
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpVerfication;
