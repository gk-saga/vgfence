import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { REACT_APP_SITE_KEY } from "../../utils/config";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

export const ContactForm = () => {
  const captchaRef = useRef(null);
  return (
    <>
      <div class="col-lg-6">
        
        <form id="contact-form" action="" method="post">
          <h2 style={{ marginBottom: "20px" }}>
            Get A <span style={{ color: "var(--vg-primary)" }}>Quote</span>
          </h2>
          {/* <Form>
            <Row className="mb-3">
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Input without validation</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                  <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
              </Col>
            </Row>
            <Button>Submit</Button>
          </Form> */}

          <div class="row">
         
            <div class="col-lg-12">
              <fieldset>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your Name..."
                  autocomplete="on"
                  required
                />
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Company Name..."
                  autocomplete="on"
                  required
                />
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                <input
                  type="text"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="Your E-mail..."
                  required=""
                />
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                <input
                  type="number"
                  name="name"
                  id="name"
                  placeholder="Phone Number..."
                  autocomplete="on"
                  required
                />
              </fieldset>
            </div>
            <div class="col-lg-12">
              <fieldset>
                <textarea
                  name="message"
                  className="mb-3"
                  id="message"
                  placeholder="Address..."
                ></textarea>
              </fieldset>
            </div>
            <div className="col-lg-12 mb-4">
              <ReCAPTCHA sitekey={REACT_APP_SITE_KEY} ref={captchaRef} />
            </div>
            <div class="col-lg-12">
              <fieldset>
                <button type="submit" id="form-submit" class="orange-button">
                  Send Message
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
