import Image from "next/image";
const OrderPriceCard = () => {
  return (
    <div>
      <div className="sticky_sidebar">
        <div className="bg-white round overflow-hidden shadow-sm mb-3 checkout-sidebar">
          <div className="d-flex align-items-center shopasia-cart-item-profile border-bottom bg-white p-3">
            <Image
              alt="shopasia"
              src={require("../../../assets/img/listing/v2.jpg")}
              className="mr-3 rounded-circle img-fluid"
              width={100}
              height={100}
            />
            <div className="d-flex flex-column">
              <h6 className="mb-1 font-weight-bold">shopasia Store</h6>
              <p className="mb-0 small text-muted">
                <i className="feather-map-pin"></i> 2036 2ND AVE, IRELAND, IRE
                10029
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-3 clearfix ">
              <p className="font-weight-bold small mb-2">Bill Details</p>
              <p className="mb-1">
                Item Total
                <span className="small text-muted">(3 item)</span>{" "}
                <span className="float-right text-dark float-end">₹3140</span>
              </p>
              <p className="mb-1">
                Store Charges{" "}
                <span className="float-right text-dark float-end">₹62.8</span>
              </p>
              <p className="mb-3">
                Delivery Fee
                <span
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  className="text-info ml-1"
                  data-original-title="Delivery partner fee - ₹3"
                >
                  <i className="icofont-info-circle"></i>
                </span>
                <span className="float-right text-dark float-end">₹10</span>
              </p>
              <h6 className="mb-0 text-success">
                Total Discount
                <span className="float-right text-success float-end">
                  ₹1884
                </span>
              </h6>
            </div>
            <div className="p-3 border-top">
              <h5 className="mb-0 ">
                TO PAY
                <span className="float-right text-danger float-end">₹1329</span>
              </h5>
            </div>
          </div>
        </div>
        {/* <p className="text-success text-center">
                    Your Total Savings on this order ₹8.52
                  </p> */}
      </div>
    </div>
  );
};

export default OrderPriceCard;
