import React from "react";
import image from "next/image";

function Footer() {
  return (
    <div>
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
              <a href="#">
                {/* <image src="img/appstore.png" height="30" /> */}
              </a>
              <a href="#">
                {/* <image src="img/playmarket.png" height="30" /> */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
