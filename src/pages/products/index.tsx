import TopNav from "../components/top-nav/topNav";
import type { NextPage } from "next";
import ProductCard from "../components/product-card/productCard";

import Layout from "../components/Layout/Layout";

const ProductList: NextPage = () => {
  const dummyData: any = [
    {
      id: 1,
      name: "chills",
      image: "/../../assets/img/listing/v1.jpg",
      units: "1kg",
      price: "100",
    },
    {
      id: 2,
      name: "Onions",
      image: "/../../assets/img/listing/v1.jpg",
      units: "1kg",
      price: "100",
    },
    {
      id: 3,
      name: "tomato",
      image: "/../../assets/img/listing/v1.jpg",
      units: "1kg",
      price: "100",
    },
    {
      id: 5,
      name: "Seeds",
      image: "/../../assets/img/listing/v1.jpg",
      units: "1kg",
      price: "100",
    },
    {
      id: 6,
      name: "Seeds",
      image: "/../../assets/img/listing/v1.jpg",
      units: "1kg",
      price: "100",
    },
    {
      id: 7,
      name: "Seeds",
      image: "/../../assets/img/listing/v1.jpg",
      units: "1kg",
      price: "100",
    },
    {
      id: 8,
      name: "Seeds",
      image: "/../../assets/img/listing/v1.jpg",
      units: "1kg",
      price: "100",
    },
  ];

  return (
    <>
      <Layout>
        <section className="py-4 shopasia-main-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shopasia-listing">
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <h4>Pick's Today</h4>
                    <div className="m-0 text-center ml-auto">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn text-muted bg-white mr-2"
                      >
                        <i className="icofont-filter mr-1"></i> Filter
                      </a>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="btn text-muted bg-white"
                      >
                        <i className="icofont-signal mr-1"></i> Sort
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    {dummyData?.map((item: any, index: any) => (
                      <ProductCard item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductList;
