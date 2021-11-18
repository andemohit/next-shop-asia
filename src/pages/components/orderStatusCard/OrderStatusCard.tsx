const OrderStatusCard = () => {
  return (
    <div>
      <div className="pb-3 mb-3">
        <a className="text-decoration-none text-dark">
          <div className="p-3 rounded shadow-sm bg-white">
            <div className="d-flex align-items-center mb-3 justify-content-lg-between">
              <p className="bg-success text-white py-1 px-2 rounded small mb-0">
                Delivered
              </p>
              <p className="text-muted ml-auto small m-0 ">
                <i className="icofont-clock-time"></i> 06/04/2020
              </p>
            </div>
            <div className="d-flex justify-content-lg-between">
              <p className="text-muted m-0">
                Transaction. ID
                <br />
                <span className="text-dark font-weight-bold">#321DERS</span>
              </p>
              <p className="text-muted m-0 ml-auto ">
                Delivered to
                <br />
                <span className="text-dark font-weight-bold">Home</span>
              </p>
              <p className="text-muted m-0 ml-auto">
                Total Payment
                <br />
                <span className="text-dark font-weight-bold">₹12.74</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OrderStatusCard;
