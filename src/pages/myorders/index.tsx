import CartItemCard from "../components/cartItemCard/CartItemCard";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import { NextPage } from "next";
import OrderStatusCard from "../components/orderStatusCard/OrderStatusCard";

const MyOrders: NextPage = () => {
  return (
    <div>
      <Layout>
        <section className="py-4 shopasia-main-body">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ul
                  className="nav nav-tabs custom-tabs border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link border-0 text-dark py-3 active"
                      id="completed-tab"
                      data-toggle="tab"
                      href="#completed"
                      role="tab"
                      aria-controls="completed"
                      aria-selected="true"
                    >
                      {/* <i className="icofont-check-alt mr-2 text-success mb-0"></i> */}
                      Completed
                    </a>
                  </li>
                  <li className="nav-item border-top" role="presentation">
                    <a
                      className="nav-link border-0 text-dark py-3"
                      id="progress-tab"
                      data-toggle="tab"
                      href="#progress"
                      role="tab"
                      aria-controls="progress"
                      aria-selected="false"
                    >
                      {/* <i className="icofont-wall-clock mr-2 text-warning mb-0"></i> */}
                      On Progress
                    </a>
                  </li>
                  <li className="nav-item border-top" role="presentation">
                    <a
                      className="nav-link border-0 text-dark py-3"
                      id="canceled-tab"
                      data-toggle="tab"
                      href="#canceled"
                      role="tab"
                      aria-controls="canceled"
                      aria-selected="false"
                    >
                      {/* <i className="icofont-close-line mr-2 text-danger mb-0"></i>{" "} */}
                      Canceled
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tabcontent col-md-9">
                <div
                  className="tab-pane fade show active"
                  id="completed"
                  role="tabpanel"
                  aria-labelledby="completed-tab"
                >
                  <div className="order-body">
                    <OrderStatusCard />
                    <OrderStatusCard />
                    <OrderStatusCard />
                    <OrderStatusCard />
                    <OrderStatusCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default MyOrders;
