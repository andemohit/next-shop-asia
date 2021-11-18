import React from "react";
import Image from "next/image";

const CartItemCard = () => {
  return (
    <div className="cart-items bg-white position-relative border-bottom">
      <a href="product_details.html" className="position-absolute">
        <span className="badge badge-danger m-3">10%</span>
      </a>
      <div className="d-flex align-items-center p-3">
        <a href="">
          <Image
            src="/./src/assets/img/listing/v1.jpg"
            className="img-fluid"
            width={100}
            height={100}
          />
        </a>
        <a href="" className="ml-4 text-dark text-decoration-none w-100">
          <h5 className="mb-1">Bread</h5>
          <p className="text-muted mb-2">
            <del className="text-success mr-1">₹1.20kg</del> ₹0.98/kg
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <p className="total_price font-weight-bold m-0">₹2.82</p>
            <form
              id=""
              className="cart-items-number d-flex ml-auto"
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
                className="qtyplus btn btn-success btn-sm  "
              />
            </form>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CartItemCard;
