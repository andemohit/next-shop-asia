import { NextPage } from "next";

const SmallScreen: NextPage = () => {
    return (
        <div className="border-bottom p-3">
            <div className="title d-flex align-items-center">
                <a
                    href="home.html"
                    className="
                    text-decoration-none text-dark
                    d-flex
                    align-items-center
                "
                >
                    {/* <Image className="shopasia-logo mr-2" src="img/logo.png" alt="" /> */}
                    <h2>Logo</h2>
                </a>
                <p className="ms-auto m-0">
                    <a
                        href="listing.html"
                        className="
                        text-decoration-none
                        bg-white
                        p-1
                        round
                        shadow-sm
                        d-flex
                        align-items-center
                    "
                    >
                        <i className="text-dark icofont-sale-discount"></i>
                        <span className="badge badge-danger p-1 ml-1 small">
                            50%
                        </span>
                    </a>
                </p>
                <a className="toggle ms-3" href="#">
                    <i className="icofont-navigation-menu"></i>
                </a>
            </div>
            <span className="text-decoration-none">
                <div
                    className="
                    input-group
                    mt-3
                    round
                    shadow-sm
                    overflow-hidden
                    bg-white
                "
                >
                    <div className="input-group-prepend">
                        <button
                            className="
                            border-0
                            btn btn-outline-secondary
                            text-success
                            bg-white
                        "
                        >
                            <i className="icofont-search"></i>
                        </button>
                    </div>
                    <input
                        type="text"
                        className="shadow-none border-0 form-control pl-0"
                        placeholder="Search for Products.."
                        aria-label=""
                        aria-describedby="basic-addon1"
                    />
                </div>
            </span>
        </div>
    );
};

export default SmallScreen;
