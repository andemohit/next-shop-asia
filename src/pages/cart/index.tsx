import CartItemCard from "../components/cartItemCard/CartItemCard";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import { NextPage } from "next";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import OrderPriceCard from "../components/OrderPriceCard/OrderPriceCard";

const Cart: NextPage = () => {
  return (
    <div>
      <Layout>
        <section className="py-4 shopnasia-main-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="accordion">
                  <div className="card border-0 shopasia-accor rounded shadow-sm overflow-hidden">
                    <div
                      className="card-header bg-white border-0 p-0"
                      id="headingOne"
                    >
                      <h2 className="mb-0">
                        <button
                          className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className="c-number">1</span> Cart (3 items)
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body p-0 border-top">
                        <div className="shopasia-cart">
                          <CartItemCard />
                          <CartItemCard />
                          <CartItemCard />
                          <div>
                            <a
                              href="#"
                              className="text-decoration-none btn btn-block p-3 w-100"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapsetwo"
                              aria-expanded="true"
                              aria-controls="collapsetwo"
                            >
                              <div className="rounded shadow bg-success d-flex align-items-center p-3 text-white">
                                <div className="more">
                                  <h6 className="m-0">Subtotal ₹8.52</h6>
                                  <p className="small m-0">
                                    Proceed to checkout
                                  </p>
                                </div>
                                <div className="ml-auto">
                                  <i className="icofont-simple-right"></i>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <OrderPriceCard />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Cart;
