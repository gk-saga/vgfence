import React from "react";
import { mockdata } from "../../utils/constant";
import { WhyChoose2 } from "./WhyChoose2";
import _ from "lodash";
import ReactReadMoreReadLess from "react-read-more-read-less";

export const HomeProduct = () => {
  const productList = [
    {
      image: "assets/img/products/temporary.jpeg",
      name: "Temporary Fence Panels",
      intro:
        " Temporary fence rentals are vital in various industries and events where crowd management and security are highly essential.",
      pathLink: "/temporary-fence",
    },
    {
      image: "assets/img/products/temporary.jpeg",
      name: "Privacy Fence Screens",
      intro:
        "A perfect solution to prevent trespassers from looking at your property and to add an elegant touch for your outdoor spaces",
      pathLink: "#",
    },
  ];
  return (
    <>
      <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div class="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
            {/* <h6 class="section-title bg-white text-center text-primary px-3">
              Wide range of
            </h6> */}
            <h2 class="section-title-alt bg-white text-center text-secondary px-3">
              Our Products
            </h2>
          </div>
          <div className="row g-5">
            {productList.map((item, index) => (
              <div
                className="col-lg-4 wow zoomIn"
                data-wow-delay="0.2s"
                key={index}
              >
                <div className="row g-5">
                  <div className="col-12 ">
                    <div className="shadow-alt w-100 h-100">
                      <img
                        className="wow zoomIn mb-2"
                        data-wow-delay="0.1s"
                        src={item.image}
                        style={{ objectFit: "cover" }}
                        alt={item.name} // Don't forget alt attribute for images
                      />
                      <div className="p-3">
                        <h5>{item.name}</h5>
                        <p className="mb-0">{item.intro}</p>
                        <a
                          type="button"
                          className="btn btn-outline-primary mt-2"
                          href={item.pathLink}
                        >
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.4s">
              <div className="row g-5">
                <div className="col-12">
                  <div className="shadow-alt w-100 h-100">
                    <img
                      className="wow zoomIn mb-2"
                      data-wow-delay="0.1s"
                      src="assets/img/products/comingsoon.png"
                      style={{ objectFit: "cover", maxWidth: "450px" }}
                    />
                    <div className="p-3">
                      <div className="pb-2">
                        <h5 className="d-inline-block">Chain Link fittings </h5>
                        <span className="float-end badge bg-badge-alter">
                          Coming soon 2024{" "}
                        </span>
                        {/* <h6>Discover an Extensive Range of Chain Link Fence Replacement Parts and Components</h6> */}
                      </div>
                      <p className="mb-0">
                        <ReactReadMoreReadLess
                          charLimit={230}
                          readMoreStyle={{
                            fontWeight: "500",
                            cursor: "pointer",
                            color: 'var(--vg-primary)',
                          }}
                          readLessStyle={{
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                          readMoreText={"Read more"}
                          readLessText={"Read less"}
                        >
                          Discover an Extensive Range of Chain Link Fence
                          accessories, which elevates the durability and
                          reliability of your chain link fence with our diverse
                          selection of chain link fittings. Our comprehensive
                          inventory encompasses essential components, from post
                          caps to rail clamps, and every screw and bolt required
                          for secure assembly.
                        </ReactReadMoreReadLess>
                      </p>
                      {/* <button
                        type="button"
                        class="btn btn-outline-primary mt-2"
                      >
                        Read More...
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="row g-5">
                <div className="col-12">
                  <div className="shadow-alt w-100 h-100">
                    <img
                      className="wow zoomIn mb-2"
                      data-wow-delay="0.1s"
                      src="assets/img/products/comingsoon.png"
                      style={{ objectFit: "cover", maxWidth: "450px" }}
                    />
                    <div className="p-3">
                      <div className="pb-2">
                        <h5 className="d-inline-block">
                          Ornamental fence fittings
                        </h5>
                        <span
                          className="float-end badge bg-badge-alter"
                          style={{ fontSize: "13px" }}
                        >
                          Coming soon 2024{" "}
                        </span>
                      </div>
                      <p className="mb-0">
                        <ReactReadMoreReadLess
                          charLimit={230}
                          readMoreStyle={{
                            fontWeight: "500",
                            cursor: "pointer",
                            color: 'var(--vg-primary)',
                          }}
                          readLessStyle={{
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                          readMoreText={"Read more"}
                          readLessText={"Read less"}
                        >
                          Discover Premium Ornamental Fence Accessories Elevate
                          the elegance and resilience of your ornamental fence
                          with our diverse range of ornamental fence fittings.
                          From exquisite post caps to ornate railings and all
                          the necessary universal brackets, screws and bolts,
                          our extensive collection ensures you'll find precisely
                          what you need for your ornamental fencing project.
                        </ReactReadMoreReadLess>
                      </p>
                      {/* <button
                        type="button"
                        class="btn btn-outline-primary mt-2"
                      >
                        Read More...
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="row g-5">
                <div className="col-12">
                  <div className="shadow-alt w-100 h-100">
                    <div className="row">
                      <div className="col-6">
                        <img
                          className="wow zoomIn mb-2 h-100 w-100"
                          data-wow-delay="0.1s"
                          src="assets/img/products/comingsoon.png"
                          style={{ objectFit: "cover", maxWidth: "450px" }}
                        />
                      </div>
                      <div className="col-6">
                        <div className="p-3">
                          <div className="pb-2">
                            <h5 className="d-inline-block">
                              Ornamental fence fittings
                            </h5>
                            <span
                              className="float-end badge bg-badge-alter"
                              style={{ fontSize: "13px" }}
                            >
                              Coming soon 2024{" "}
                            </span>
                          </div>
                          <p className="mb-0">
                            <ReactReadMoreReadLess
                              charLimit={230}
                              readMoreStyle={{
                                fontWeight: "500",
                                cursor: "pointer",
                                color: "#ff6e11",
                              }}
                              readLessStyle={{
                                fontWeight: "600",
                                cursor: "pointer",
                              }}
                              readMoreText={"Read more"}
                              readLessText={"Read less"}
                            >
                              Discover Premium Ornamental Fence Replacement
                              Parts and Accessories Elevate the elegance and
                              resilience of your ornamental fence with our
                              diverse range of ornamental fence fittings. From
                              exquisite post caps to ornate railings and all the
                              necessary screws and bolts, our extensive
                              collection ensures you'll find precisely what you
                              need for your ornamental fencing project.
                            </ReactReadMoreReadLess>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
