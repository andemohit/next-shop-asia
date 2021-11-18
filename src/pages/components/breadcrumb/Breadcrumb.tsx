import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const { pathname } = useRouter();
  const path = pathname.replace('/', "")

  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb mb-0">
        <div className="container">
          <ol className="d-flex align-items-center mb-0 p-0 list-unstyled">
            <li className="breadcrumb-item">
              <Link href="/">
                <a className="text-success">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {path}
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
