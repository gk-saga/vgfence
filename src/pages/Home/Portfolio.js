import React, { useState } from "react";

export const Portfolio = () => {
  const initialPortfolioImages = [
    {
      id: 1,
      title: "Agricultural",
      image: "assets/img/portfolio/portfolio (1).jpg",
    },
    {
      id: 2,
      title: "Chain Link",
      image: "assets/img/portfolio/portfolio (2).jpg",
    },
    {
      id: 3,
      title: "Gates",
      image: "assets/img/portfolio/portfolio (3).jpg",
    },
    {
      id: 3,
      title: "School & Colleges",
      image: "assets/img/portfolio/portfolio (4).jpg",
    },
    {
      id: 3,
      title: "Solar & Electrical",
      image: "assets/img/portfolio/portfolio (5).jpg",
    },
  ];

  const [portfolioImages, setPortfolio] = useState(initialPortfolioImages);

  const setTitle = [...new Set(initialPortfolioImages.map((item) => item.title))];
  console.log("sliceTitle", setTitle);

  const portfolioFilter = (selectedTitle) => {
    if (selectedTitle === "All") {
      setPortfolio(initialPortfolioImages); // Reset to all
    } else {
      const filterData = initialPortfolioImages.filter(
        (item) => item.title === selectedTitle
      );
      setPortfolio(filterData);
    }
  };

  return (
    <div className="container-fluid event py-6">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Only Real Projects
          </h6>
          <h1 className="mb-5">Our Portfolio</h1>
        </div>
        <div className="tab-class text-center">
          <ul
            className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
            data-wow-delay="0.1s"
          >
            <li className="nav-item p-2">
              <a
                className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                onClick={() => portfolioFilter("All")} // Reset to all
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  All
                </span>
              </a>
            </li>
            {setTitle.map((item) => (
              <li className="nav-item p-2" key={item}>
                <a
                  className={`d-flex mx-2 py-2 border border-primary bg-light rounded-pill ${
                    item === "All" ? "active" : ""
                  }`}
                  data-bs-toggle="pill"
                  onClick={() => portfolioFilter(item)}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="row">
            {portfolioImages.map((item) => (
              <div
                className="col-md-6 col-lg-3 wow fadeInUp"
                key={item.title}
              >
                <div className="event-img position-relative">
                  <img
                    className="img-fluid rounded w-100"
                    src={item.image}
                    alt={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
