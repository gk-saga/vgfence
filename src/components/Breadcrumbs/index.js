import React, { useEffect } from "react";
import { mockdata } from "../../utils/constant";
import _ from "lodash";
import { toUpperCamelCase } from "../../utils";

export const Breadcrumbs = () => {
  const currentPath = window.location.pathname;

  const navigationDetails = _.concat(
    mockdata.navs || [],
    mockdata.products || [],
    mockdata.service || [],
    mockdata.Rental || []
  );
  console.log("navigationDetails", navigationDetails);

  const backgroundImage = _.first(
    _.filter(navigationDetails, (item) => item.path === currentPath)
  )?.image;
  //
  console.log("currentPath", currentPath);
  console.log("backgroundImage", backgroundImage);
  // const containerStyle = {
  //   background: `linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url("${backgroundImage}")`,
  //   backgroundSize: "cover",
  // };
  const containerStyle = {
    background: `url("${backgroundImage}") center / cover`,
  };
  return (
    <>
      <div
        className="container-fluid bg-primary py-5 mb-5 page-header"
        style={containerStyle}
      >
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="text-white animated slideInDown">
                {
                  _.first(
                    _.filter(
                      navigationDetails,
                      (item) => item.path === currentPath
                    )
                  )?.title
                }
                {/* {toUpperCamelCase(currentPath.replace("/", ""))} */}
              </h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <a class="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li
                    class="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    {
                      _.first(
                        _.filter(
                          navigationDetails,
                          (item) => item.path === currentPath
                        )
                      )?.title
                    }
                    {/* {toUpperCamelCase(currentPath.replace("/", ""))} */}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
