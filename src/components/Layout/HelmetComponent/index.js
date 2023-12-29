import _ from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import { mockdata } from "../../../utils/constant";

export const HelmetComponent = () => {
  const currentPath = window.location.pathname;
  return (
    <Helmet>
      <title>
        {
          _.first(_.filter(mockdata.navs, (item) => item.path === currentPath))
            ?.metaTitle
        }
      </title>
      <meta
        name="description"
        content={
          _.first(_.filter(mockdata.navs, (item) => item.path === currentPath))
            ?.description
        }
      />
    </Helmet>
  );
};
