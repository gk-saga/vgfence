import React, { useEffect, useState } from "react";

export const TestHeader = () => {
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
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light header-area"
      id="main_navbar"
    >
      <div className="container-fluid main-nav">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
