import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GalleryContext } from "../contexts/GalleryContext";

const Sidebar = () => {
  const { categories } = useContext(GalleryContext);

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Movie Gallery</span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a href="/" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>
          {categories &&
            categories.map((category, index) => (
              <li key={index}>
                <Link
                  className="nav-link px-0 align-middle"
                  to={`/${category.name.toLowerCase()}`}
                >
                  <i className="fs-4 bi-table"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    {category.name}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
