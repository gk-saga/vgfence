import {
  Col,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';

const CheckboxInput = (props) => {
  const {
    label = '',
    placeholder = '',
    name = '',
    description = '',
    hasError = false,
    onChange = () => {},
    errorMessage = '',
    value = '',
    isDisabled = false,
    className = '',
  } = props;

  return (
    <Col className={`defaultInputMargin ${className}`}>
      <FormGroup className='mb-3'>
        <div className='form-check form-check-outline form-check-success mb-3'>
          <Input
            name={`${name}`}
            placeholder={`${placeholder}`}
            type='checkbox'
            className='form-check-input'
            id='customCheck-outlinecolor2'
            onChange={onChange}
            checked={value}
            disabled={isDisabled}
          />
          <FormText id='card-title-desc'>{label}</FormText>
        </div>
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

export default CheckboxInput;
