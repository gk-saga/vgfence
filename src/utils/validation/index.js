import _ from "lodash";

import * as validator from "validator";

import { FILED_TYPES } from "./label";
import moment from "moment";
import { getCurrentDate, getCurrentDateTime } from "..";

export const isValid = (type, data) => {
  if (_.isUndefined(data)) return false;

  let value = _.trim(`${data}`);

  let result;

  switch (type) {
    case FILED_TYPES.PASSWORD:
      result =
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        }) && validator.isLength(value, { min: 8, max: 15 });
      break;

    case FILED_TYPES.USER_NAME:
      result =
        validator.isAlphanumeric(value) &&
        validator.isLength(value, { min: 4, max: 30 });
      break;

    case FILED_TYPES.IS_NOT_EMPTY:
      result = !_.isEmpty(value);
      break;

    case FILED_TYPES.MOBILE_NUMBER:
      result = validator.isMobilePhone(value, ["en-IN"], false);
      break;
    case FILED_TYPES.EMAIL:
      result = validator.isEmail(value);
      break;
    case FILED_TYPES.ALPHA_NUMERIC:
      result =
        validator.isAscii(value) &&
        validator.isLength(value, { min: 3, max: 50 });
      break;

    case FILED_TYPES.ADDRESS:
      result =
        validator.isAscii(value) &&
        validator.isLength(value, { min: 3, max: 150 });
      break;

    case FILED_TYPES.NUMERIC:
      result =
        validator.isNumeric(value) &&
        validator.isLength(value, { min: 1, max: 30 });
      break;

    case FILED_TYPES.STATUS:
      result =
        validator.isAscii(value) &&
        validator.isLength(value, { min: 1, max: 2 });
      break;

    case FILED_TYPES.DECIMAL:
      result =
        validator.isDecimal(value) &&
        validator.isLength(value, { min: 1, max: 100 });
      break;

    case FILED_TYPES.COLOR:
      result = validator.isHexColor(value);
      break;

    case FILED_TYPES.LANDLINE:
      result =
        validator.matches(value, /\d{4,5}([- ]*)\d{6}/gm) &&
        validator.isLength(value, { min: 11, max: 12 });
      break;

    case FILED_TYPES.DATE:
      result =
        validator.isDate(value, {
          format: "YYYY-MM-DD",
          strictMode: true,
          delimiters: ["-"],
        }) && moment(value).isSameOrBefore(getCurrentDate());
      break;

    case FILED_TYPES.DATETIME: {
      result = moment(value).isSameOrBefore(getCurrentDateTime());
      break;
    }

    case FILED_TYPES.FORMER_DATETIME: {
      result = moment(value).isSameOrBefore(
        moment().subtract({ days: 1 }).format("YYYY-MM-DD HH:mm:ss")
      );
      break;
    }

    default:
      result = false;
  }

  return result;
};
