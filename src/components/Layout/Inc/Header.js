import React, { useEffect, useState } from "react";
import { mockdata } from "../../../utils/constant";
import { Subheader } from "./Subheader";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const menuTrigger = document.querySelector(".menu-trigger");

    const handleMenuClick = () => {
      setIsMenuActive((prev) => !prev);

      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (width < 991) {
        const nav = document.querySelector(".header-area .nav");
        nav.style.display = isMenuActive ? "none" : "block";
      }
    };

    menuTrigger.addEventListener("click", handleMenuClick);

    return () => {
      menuTrigger.removeEventListener("click", handleMenuClick);
    };
  }, [isMenuActive]);

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prev) => !prev);
  };
  const handleDropdownToggle2 = () => {
    setIsDropdownVisible2((prev) => !prev);
  };

  const [isMenustatus, setStatus] = useState(false);
  useEffect(() => {
    const bootnavbar = (options) => {
      const defaultOption = {
        selector: "main_navbar",
        animation: true,
        animateIn: "animate__fadeIn",
      };

      const bnOptions = { ...defaultOption, ...options };

      const init = function () {
        var dropdowns = document
          .getElementById(bnOptions.selector)
          .getElementsByClassName("dropdown");

        Array.prototype.forEach.call(dropdowns, (item) => {
          // add animation
          if (bnOptions.animation) {
            const element = item.querySelector(".dropdown-menu");
            element.classList.add("animate__animated");
            element.classList.add(bnOptions.animateIn);
          }
          // click
          item.addEventListener("click", function () {
            setStatus(!isMenustatus);
            isMenustatus
              ? this.classList.add("show")
              : this.classList.remove("show");

            const element = this.querySelector(".dropdown-menu");
            element.classList.add("show");
          });
          // hover effects
          item.addEventListener("mouseover", function () {
            this.classList.add("show");
            const element = this.querySelector(".dropdown-menu");
            element.classList.add("show");
          });

          item.addEventListener("mouseout", function () {
            this.classList.remove("show");
            const element = this.querySelector(".dropdown-menu");
            element.classList.remove("show");
          });
        });
      };

      init();
    };

    bootnavbar();
  }, []);

  return (
    <>
      <Subheader />
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav" id="main_navbar">
                <a path="/" className="logo">
                  <img
                    src="assets/img/logo/vg_logo.png"
                    alt="logo"
                    style={{ width: "150px", borderRadius: "5px" }}
                  />
                </a>
                <ul className="nav">
                  {mockdata.navs.slice(0, 2).map((item) => (
                    <li key={item.title}>
                      <a
                        href={`${item.path}`}
                        path="/"
                        className={`nav-item nav-link ${
                          item.path === currentPath ? "active" : ""
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                  <li
                    className={`nav-item dropdown ${
                      isDropdownVisible ? "show" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      onClick={handleDropdownToggle}
                    >
                      Products
                    </a>
                    <div
                      className={`dropdown-menu m-0 ${
                        isDropdownVisible ? "show" : ""
                      }`}
                    >
                      {mockdata.products.map((item) => (
                        <span key={item.title}>
                          <a
                            href={`${item.path}`}
                            path="/"
                            className={`dropdown-item ${
                              item.path === currentPath ? "active" : ""
                            }`}
                          >
                            {item.title}
                          </a>
                        </span>
                      ))}
                      {/* Add more dropdown items as needed */}
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item dropdown">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          Rental
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{
                            border: "1px solid #cfcfcf",
                            boxShadow: "1px 1px 3px gray",
                          }}
                        >
                          {mockdata.Rental.map((item) => (
                            <li key={item.title}>
                              <a
                                className="dropdown-item"
                                href={`${item.path}`}
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      {mockdata.service.map((item) => (
                        <li key={item.title}>
                          <a className="dropdown-item" href={`${item.path}`}>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {mockdata.navs.slice(2, 7).map((item) => (
                    <li key={item.title}>
                      <a
                        href={`${item.path}`}
                        path="/"
                        className={`nav-item nav-link ${
                          item.path === currentPath ? "active" : ""
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                  {/* <li>
                    <a href="#">
                      <i className="fa fa-solid fa-phone"></i> Get A Quote
                    </a>
                  </li> */}
                </ul>
                <div className={`menu-trigger ${isMenuActive ? "active" : ""}`}>
                  <span>Menu</span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
