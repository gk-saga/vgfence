import _ from "lodash";
import { mockdata } from "./constant";

export const REACT_APP_SECRET_KEY = "6LcmPy0pAAAAAFMhXTy_vhajYASzUBIZNxk-f1qf"
export const REACT_APP_SITE_KEY = "6LcmPy0pAAAAADG6w4fKrNgGTYIy-aRVPi72WmEE"

export const navigationDetails = _.concat(
    mockdata.navs || [],
    mockdata.products || [],
    mockdata.service || [],
    mockdata.Rental || []
  );