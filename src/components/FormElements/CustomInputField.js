import CheckboxInput from "./checkBoxInput/checkBoxInput";
import DateInput from "./dateInput/dateInput";
import DateTimeInput from "./dateTimeInput/dateTimeInput";
import DropdownInput from "./dropdownInput/dropdownInput";
import TextAreaInput from "./textAreaInput/textAreaInput";
import CustomTextInput from "./textInput/CustomTextInput";

const CustomInputField = (props) => {
  switch (props.type) {
    // case "datetime":
    //   return <DateTimeInput {...props} />;
    // case "date":
    //   return <DateInput {...props} />;
    case "dropdown":
      return <DropdownInput {...props} />;
    case "textarea":
      return <TextAreaInput {...props} />;
    case "checkbox":
      return <CheckboxInput {...props} />;
    default:
      return <CustomTextInput {...props} />;
  }
};

export default CustomInputField;
