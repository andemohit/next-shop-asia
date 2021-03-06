import { NextPage } from "next";
import Icofont from "react-icofont";
import Link from "next/link";

import { FiSearch, FiLogIn } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { IoIosNotifications, IoMdCart } from 'react-icons/io';

const LargeScreen: NextPage = () => {
  // const renderIcon = () => {
  //   return (
  //     typeof window !== "undefined"? <Icofont icon="icofont-location-pin" /> : <i></i>
  //   )
  // }

  return (
    <div className="bg-white shadow-sm shopasia-main-nav">
      <nav
        className="
                navbar navbar-expand-lg navbar-light
                bg-white
                shopasia-header
                py-0
                container
            "
      >
        <a className="navbar-brand mr-0" href="home.html">
          <h2>Logo</h2>
          {/* <Image className="img-fluid logo-img" src="img/logo.png" alt="" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ml-3 d-flex align-items-center">
          <div className="dropdown mr-3">
            <a
              className="
                            text-dark
                            dropdown-toggle
                            d-flex
                            align-items-center
                            shopasia-location-drop
                        "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center bg-light rounded-pill border shadow-sm p-2 mr-2">
                <Link href="cart.html">
                    <a>
                        <IoLocationSharp size="1.3em" />
                    </a>
                </Link>
              </div>
              <div>
                <p className="text-muted mb-0 small">Select Location</p>
                Maharashtra India...
              </div>
            </a>
            <div
              className="dropdown-menu shopasia-select-loaction p-3"
              aria-labelledby="navbarDropdown"
            >
              <span>Select your city to start shopping</span>
              <form className="form-inline my-2">
                <div className="input-group p-0 col-lg-12">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Search Location"
                  />
                  <div className="input-group-prepend">
                    <div
                      className="
                                            btn btn-success
                                            rounded-right
                                            btn-sm
                                        "
                    >
                      <i className="icofont-location-arrow"></i>
                      Detect
                    </div>
                  </div>
                </div>
              </form>
              <div className="city pt-2">
                <h6>Top Citys</h6>
                <p className="border-bottom m-0 py-1">
                  <a href="#" className="text-dark">
                    Banglore
                  </a>
                </p>
                <p className="border-bottom m-0 py-1">
                  <a href="#" className="text-dark">
                    Noida
                  </a>
                </p>
                <p className="border-bottom m-0 py-1">
                  <a href="#" className="text-dark">
                    Delhi
                  </a>
                </p>
                <p className="m-0 py-1">
                  <a href="#" className="text-dark">
                    Mumbai
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="input-group mr-sm-2 col-lg-12">
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername2"
              placeholder="Search for Products.."
            />
            <div className="input-group-prepend">
              <div className="btn btn-success rounded-right">
                <i className="icofont-search"></i>
                {/* <FontAwesomeIcon icon={faSearch} /> */}
                <FiSearch />
              </div>
            </div>
          </div>
        </div>
        <div className="ms-auto d-flex align-items-center">
          <Link href="/">
            <a
              data-toggle="modal"
              data-target="#login"
              className="d-flex align-items-center bg-light rounded-pill border shadow-sm p-2 me-2"
            >
              <FiLogIn size="1.1rem" />
            </a>
          </Link>
          <div className="dropdown">
            <Link href="/">
              <a
                className="text-dark dropdown-toggle not-drop"
                id="dropdownMenuNotification"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  className="d-flex align-items-center bg-light rounded-pill border shadow-sm p-2 me-2"
                >
                  <IoIosNotifications size="1.1rem" />
                </span>
              </a>
            </Link>
            <div
              className="
                            dropdown-menu dropdown-menu-right
                            p-0
                            shopasia-notifications-main
                        "
              aria-labelledby="dropdownMenuNotification"
            >
              <div
                className="
                                shopasia-notifications
                                bg-white
                                border-bottom
                                p-2
                            "
              >
                <div className="position-absolute ml-n1 py-2">
                  <i
                    className="
                                        icofont-check-circled
                                        text-white
                                        bg-success
                                        rounded-pill
                                        p-1
                                    "
                  ></i>
                </div>
                <a
                  href="status_complete.html"
                  className="text-decoration-none text-dark"
                >
                  <div className="notifiction small">
                    <div className="ml-3">
                      <p className="font-weight-bold mb-1">
                        Yay! Order Complete
                      </p>
                      <p className="small m-0">
                        <i className="icofont-ui-calendar"></i>
                        Today, 05:14 AM
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className="
                                shopasia-notifications
                                bg-white
                                border-bottom
                                p-2
                            "
              >
                <a
                  href="status_onprocess.html"
                  className="text-decoration-none text-muted"
                >
                  <div className="notifiction small">
                    <div className="ml-3">
                      <p className="font-weight-bold mb-1">
                        Yipiee. order Success
                      </p>
                      <p className="small m-0">
                        <i className="icofont-ui-calendar"></i>
                        Monday, 08:30 PM
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="shopasia-notifications bg-white p-2">
                <a
                  href="status_onprocess.html"
                  className="text-decoration-none text-muted"
                >
                  <div className="notifiction small">
                    <div className="ml-3">
                      <p className="font-weight-bold mb-1">New Promos Coming</p>
                      <p className="small m-0">
                        <i className="icofont-ui-calendar"></i>
                        Sunday, 10:30 AM
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a
            href="cart.html"
            className="d-flex align-items-center bg-light rounded-pill border shadow-sm p-2 me-2"
          >
            <IoMdCart size="1.1rem" />
          </a>
        </div>
      </nav>

      <div className="bg-color-head">
        <div className="container menu-bar d-flex align-items-center">
          <ul className="list-unstyled d-flex mb-0">
            <li className="nav-item active">
              <a className="nav-link text-white pl-0" href="home.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/products">
                  <a className="dropdown-item" href="listing.html">
                    Listing
                  </a>
                </Link>
                <a className="dropdown-item" href="product_details.html">
                  Detail
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="picks_today.html">
                  Trending
                </a>
                <a className="dropdown-item" href="recommend.html">
                  Recommended
                </a>
                <a className="dropdown-item" href="fresh_vegan.html">
                  Most Popular
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Checkout Process
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="cart.html">
                  Cart
                </a>
                <a className="dropdown-item" href="checkout.html">
                  Checkout
                </a>
                <a className="dropdown-item" href="successful.html">
                  Successful
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My Order
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="my_order.html">
                  My order
                </a>
                <a className="dropdown-item" href="status_complete.html">
                  Status Complete
                </a>
                <a className="dropdown-item" href="status_onprocess.html">
                  Status on Process
                </a>
                <a className="dropdown-item" href="status_canceled.html">
                  Status Canceled
                </a>
                <a className="dropdown-item" href="review.html">
                  Review
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Extra Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="verification.html">
                  Verification
                </a>

                <a className="dropdown-item" href="terms_conditions.html">
                  Terms & Conditions
                </a>
                <a className="dropdown-item" href="privacy.html">
                  Privacy
                </a>
                <a className="dropdown-item" href="terms%26conditions.html">
                  Conditions
                </a>
                <a className="dropdown-item" href="help_support.html">
                  Help Support
                </a>
                <a className="dropdown-item" href="help_ticket.html">
                  Help Ticket
                </a>
                <a className="dropdown-item" href="refund_payment.html">
                  Refund Payment
                </a>
                <a className="dropdown-item" href="faq.html">
                  FAQ
                </a>
                <a className="dropdown-item" href="signin.html">
                  Sign In
                </a>
                <a className="dropdown-item" href="signup.html">
                  Sign Up
                </a>
                <a className="dropdown-item" href="search.html">
                  Search
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LargeScreen;
