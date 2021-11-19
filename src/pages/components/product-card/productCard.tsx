import { NextPage } from "next";
import Icofont from "react-icofont";
import Image from "next/image";

interface productDetailsProps {
  item: any;
}

const ProductCard = ({ item }: productDetailsProps) => {
  return (
    <div className="col-6 col-md-3 mb-3">
      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
        <div className="list-card-image">
          <div className="wish_list_icn">
            <button>
              <i className="icofont-heart"></i>
            </button>
          </div>
          <a href="product_details.html" className="text-dark"></a>
          <div className="p-3 ">
            <a href="product_details.html" className="text-dark">
              <Image
                src="/../../../assets/img/listing/v1.jpg"
                className="img-fluid item-img w-100 mb-3"
                alt=""
                width={90}
                height={130}
              />
              <h6>{item.name}</h6>
            </a>
            <div className="d-flex align-items-center justify-content-between">
              <a href="product_details.html" className="text-dark">
                <h6 className="price m-0 text-success">
                  ₹{item.price}/{item.units}
                </h6>
              </a>
              <a
                data-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
                className="btn btn-outline-success btn-sm ml-auto"
              >
                Add
              </a>
              <div className="collapse qty_show" id="collapseExample1">
                <div>
                  <span className="ml-auto">
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
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
