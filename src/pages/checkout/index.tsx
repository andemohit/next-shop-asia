import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import OrderPriceCard from "../components/OrderPriceCard/OrderPriceCard";

const Checkout: NextPage = () => {
  return (
    <Layout>
      <section className="py-4 shopasia-main-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="bg-white rounded shadow-sm overflow-hidden">
                <div className="address p-3 bg-light">
                  <h6 className="m-0 text-dark d-flex align-items-center justify-content-lg-between">
                    Address{" "}
                    <span className="small ml-auto">
                      <a
                        href="#"
                        className="font-weight-bold text-decoration-none text-success"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="icofont-location-arrow"></i> Change
                      </a>
                    </span>
                  </h6>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-2 font-weight-bold">Home</p>
                    <p className="mb-2 badge badge-danger ml-auto">Default</p>
                  </div>
                  <p className="small text-muted m-0">1001 Veterans Blvd</p>
                  <p className="small text-muted m-0">Redwood City, CA 94063</p>
                </div>
                {/* <div className="address p-3 bg-light">
                  <h6 className="m-0 text-dark">Payment Method</h6>
                </div>
                <div className="p-3">
                  <a
                    href="#"
                    className="text-success text-decoration-none w-100"
                    data-toggle="modal"
                    data-target="#paymentModal"
                  >
                    <div className="d-flex align-items-center">
                      <i className="icofont-credit-card"></i>{" "}
                      <span className="ml-3">Edit Payment Method</span>{" "}
                      <i className="icofont-rounded-right ml-auto"></i>
                    </div>
                  </a>
                </div> */}
                {/* <div className="address p-3 bg-light">
                  <h6 className="text-dark m-0">Promo Code</h6>
                </div>
                <div>
                  <div className="accordion" id="accordionExample">
                    <div
                      className="d-flex align-items-center"
                      id="headingThree"
                    >
                      <a
                        className="p-3 d-flex align-items-center text-decoration-none text-success w-100"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="icofont-badge mr-3"></i> Add Promo Code
                        <i className="icofont-rounded-down ml-auto"></i>
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse p-3 border-top"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="clearfix">
                        <div className="input-group-sm mb-2 input-group">
                          <input
                            placeholder="Enter promo code"
                            type="text"
                            className="form-control"
                          />
                          <div className="input-group-append">
                            <button
                              id="button-addon2"
                              type="button"
                              className="btn btn-success"
                            >
                              <i className="icofont-percent"></i> APPLY
                            </button>
                          </div>
                        </div>
                        <div className="mb-0 input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="icofont-ui-message"></i>
                            </span>
                          </div>
                          <textarea
                            placeholder="Any suggestions? We will pass it on..."
                            aria-label="With textarea"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <OrderPriceCard />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
