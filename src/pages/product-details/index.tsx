import type { NextPage } from "next";
import ProductCard from "../components/product-card/productCard";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

const ProductDetails: NextPage = () => {
  return (
    <Layout>
      <section className="py-4 shopasia-main-body">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="recommend-slider mb-3 slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                      <div className="slick-track">
                        <div
                          className="shopasia-slider-item slick-slide slick-cloned"
                          data-slick-index="-1"
                          id=""
                          aria-hidden="true"
                        >
                          <Image
                            src={require("../../assets/img/recommend/r3.jpg")}
                            className="img-fluid mx-auto shadow-sm rounded"
                            alt="Responsive image"
                            layout="responsive"
                          />
                        </div>
                      </div>
                    </div>

                    {/* <ul className="slick-dots">
                      <li className="slick-active" role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control00"
                          aria-controls="slick-slide00"
                          aria-label="1 of 3"
                          aria-selected="true"
                        >
                          1
                        </button>
                      </li>
                      <li role="presentation" className="">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control01"
                          aria-controls="slick-slide01"
                          aria-label="2 of 3"
                        >
                          2
                        </button>
                      </li>
                      <li role="presentation" className="">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control02"
                          aria-controls="slick-slide02"
                          aria-label="3 of 3"
                        >
                          3
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="pd-f d-flex align-items-center mb-3 justify-content-between w-100 ">
                    <a className="btn btn-outline-success p-3  btn-block d-flex align-items-center justify-content-center mr-3 btn-lg  rounded-pill w-100">
                      <i className="icofont-plus m-0 mr-2"></i> ADD TO CART
                    </a>
                    <Link href="/cart">
                      <a className="btn btn-success p-3  btn-block d-flex align-items-center justify-content-center btn-lg m-0  rounded-pill w-100">
                        <i className="icofont-cart m-0 mr-2"></i> BUY NOW
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-4 bg-white rounded shadow-sm">
                    <div className="pt-0">
                      <h2 className="font-weight-bold">
                        Valencia Orange - Imported
                      </h2>
                      <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                        Product MRP :{" "}
                        <b className="h6 text-dark m-0">₹263.00</b>
                        <span className="badge badge-danger ml-2">50% OFF</span>
                      </p>
                      <a href="review.html">
                        <div className="rating-wrap d-flex align-items-center mt-2">
                          <ul className="rating-stars list-unstyled">
                            <li>
                              <i className="icofont-star text-warning"></i>
                              <i className="icofont-star text-warning"></i>
                              <i className="icofont-star text-warning"></i>
                              <i className="icofont-star text-warning"></i>
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                          <p className="label-rating text-muted ml-2 small">
                            {" "}
                            (245 Reviews)
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="pt-2">
                      <div className="row justify-content-between">
                        <div className="col">
                          <p className="font-weight-bold m-0">Delivery</p>
                          <p className="text-muted m-0">Free</p>
                        </div>
                        <div className="text-right col justify-content-end ">
                          <p className="font-weight-bold m-0">Available in:</p>
                          <p className="text-muted m-0">1 kg, 2 kg, 5 kg</p>
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="pt-3 bg-white">
                        <div className="d-flex align-items-center justify-content-between">
                          <div
                            className="btn-group shopasia-radio btn-group-toggle "
                            data-toggle="buttons"
                          >
                            <label className="btn btn-secondary active">
                              4 pcs
                            </label>
                            {/* <label className="btn btn-secondary">
                              <input type="radio" name="options" id="option2" />
                              6 pcs
                            </label>
                            <label className="btn btn-secondary">
                              <input type="radio" name="options" id="option3" />
                              1 kg
                            </label> */}
                          </div>
                          <a className="ml-auto" href="#">
                            <form
                              id=""
                              className="cart-items-number d-flex"
                              method="POST"
                              action="#"
                            >
                              <input
                                type="button"
                                value="-"
                                className="qtyminus btn btn-success btn-sm"
                              />
                              <input
                                type="text"
                                name="quantity"
                                value="1"
                                className="qty form-control"
                              />
                              <input
                                type="button"
                                value="+"
                                className="qtyplus btn btn-success btn-sm"
                              />
                            </form>
                          </a>
                        </div>
                      </div>
                      <div className="pt-3">
                        {/* <div className="input-group mb-3 border rounded shadow-sm overflow-hidden bg-white">
                          <div className="input-group-prepend">
                            <button className="border-0 btn btn-outline-secondary text-success bg-white">
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="shadow-none border-0 form-control form-control-lg pl-0"
                            placeholder="Type your city (e.g Chennai, Pune)"
                            aria-label=""
                            aria-describedby="basic-addon1"
                          />
                        </div> */}
                        <p className="font-weight-bold mb-2">Product Details</p>
                        <p className="text-muted small mb-0">
                          High quality Fresh Orange fruit exporters from South
                          Korea for sale. All citrus trees belong to the single
                          genus Citrus and remain almost entirely interfertile.
                          This includes grapefruits, lemons, limes, oranges, and
                          various other types and hybrids. The fruit of any
                          citrus tree is considered a hesperidium, a kind of
                          modified berry; it is covered by a rind wall.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
