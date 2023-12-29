import {
  Col,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';

const DateTimeInput = (props) => {
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
  } = props;

  return (
    <Col className={`defaultInputMargin ${className}`}>
      <FormGroup className='mb-3'>
        {showLabel && (
          <Label htmlFor={`${name}`}>
            {label}
            {required && <span className='requiredStyle'>&nbsp;*</span>}
          </Label>
        )}
        <Input
          name={`${name}`}
          placeholder={`${placeholder}`}
          type='datetime-local'
          invalid={hasError}
          valid={!hasError}
          onChange={onChange}
          className={'form-control' + (hasError ? ' is-invalid' : '')}
          value={value}
          disabled={isDisabled}
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

export default DateTimeInput;
