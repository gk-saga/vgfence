import {
  Col,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';
import Select from 'react-select';

const DropdownInput = (props) => {
  const {
    label = '',
    placeholder = '',
    name = '',
    description = '',
    required = false,
    hasError = false,
    onChange = () => {},
    errorMessage = '',
    value = '',
    isDisabled = false,
    showLabel = true,
    className = '',
    options = [],
    isMulti = false,
  } = props;

  return (
    <Col className={`defaultInputMargin`}>
      <FormGroup className='mb-3'>
        {showLabel && (
          <Label htmlFor={`${name}`}>
            {label}
            {required && <span className='requiredStyle'>&nbsp;*</span>}
          </Label>
        )}
        <Select
          name={`${name}`}
          isMulti={isMulti}
          placeholder={`${placeholder}`}
          value={value}
          onChange={onChange}
          options={options}
          className={
            'defaultInputMargin' +
            'form-control' +
            (hasError ? ' is-invalid' : '') +
            className
          }
          classNamePrefix='select2-selection'
          isDisabled={isDisabled}
        />
        {description && !hasError && (
          <FormText id='card-title-desc'>{description}</FormText>
        )}
        {hasError && (
          <FormFeedback className='invalid-feedback'>
            {errorMessage}
          </FormFeedback>
        )}
      </FormGroup>
    </Col>
  );
};

export default DropdownInput;
