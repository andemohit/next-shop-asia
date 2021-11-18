import React from "react";
import image from "next/image";
import Icofont from "react-icofont";
import { NextPage } from "next";

const smallScreen: NextPage = () => {
  return (
    <footer className="section-footer border-top bg-white">
      <section className="footer-top py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name=""
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-success">
                      Subscribe
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-4 text-md-right">
              <a href="#" className="btn btn-icon btn-light">
                {/* <Icofont icon="facebook" /> */}
              </a>
              <a href="#" className="btn btn-icon btn-light">
                {/* <Icofont icon="twitter" /> */}
              </a>
              <a href="#" className="btn btn-icon btn-light">
                {/* <Icofont icon="instagram" /> */}
              </a>
              <a href="#" className="btn btn-icon btn-light">
                {/* <Icofont icon="youtube" /> */}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-main border-top pt-5 pb-4">
        <div className="container">
          <div className="row">
            <aside className="col-md">
              <h6 className="title">Products</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <a href="listing.html" className="text-dark">
                    Listing
                  </a>
                </li>
                <li>
                  <a href="product_details.html" className="text-dark">
                    Detail
                  </a>
                </li>
                <li>
                  <a href="picks_today.html" className="text-dark">
                    Trending
                  </a>
                </li>
                <li>
                  <a href="recommend.html" className="text-dark">
                    Recommended
                  </a>
                </li>
                <li>
                  <a href="fresh_vegan.html" className="text-dark">
                    Most Popular
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Checkout Process</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <a href="cart.html" className="text-dark">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="cart.html" className="text-dark">
                    Order Address
                  </a>
                </li>
                <li>
                  <a href="cart.html" className="text-dark">
                    Delivery Time
                  </a>
                </li>
                <li>
                  <a href="cart.html" className="text-dark">
                    Order Payment
                  </a>
                </li>
                <li>
                  <a href="checkout.html" className="text-dark">
                    Checkout
                  </a>
                </li>
                <li>
                  <a href="successful.html" className="text-dark">
                    Successful
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">My Order</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <a href="my_order.html" className="text-dark">
                    My order
                  </a>
                </li>
                <li>
                  <a href="status_complete.html" className="text-dark">
                    Status Complete
                  </a>
                </li>
                <li>
                  <a href="status_onprocess.html" className="text-dark">
                    Status on Process
                  </a>
                </li>
                <li>
                  <a href="status_canceled.html" className="text-dark">
                    Status Canceled
                  </a>
                </li>
                <li>
                  <a href="review.html" className="text-dark">
                    Review
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">My Account</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <a className="text-dark" href="my_account.html">
                    My account
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="promos.html">
                    Promos
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="my_address.html">
                    My address
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="terms_conditions.html">
                    Terms &amp; conditions
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="help_support.html">
                    Help &amp; support
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="help_ticket.html">
                    Help ticket
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="signin.html">
                    Logout
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Extra Pages</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <a href="terms_conditions.html" className="text-dark">
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="help_support.html" className="text-dark">
                    Help Support
                  </a>
                </li>
                <li>
                  <a href="refund_payment.html" className="text-dark">
                    Refund Payment
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="text-dark">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="signin.html" className="text-dark">
                    Sign In
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section className="footer-bottom border-top py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="pr-2">© 2020 ShopAsia</span>
              <span className="pr-2">
                <a href="#" className="text-dark">
                  Privacy
                </a>
              </span>
              <span className="pr-2">
                <a href="#" className="text-dark">
                  Terms &amp; Conditions
                </a>
              </span>
            </div>
            <div className="col-md-6 text-md-right">
              <a href="#">{/* <image src:="img/appstore.png"  /> */}</a>
              <a href="#">{/* <image src="img/playmarket.png" /> */}</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default smallScreen;
