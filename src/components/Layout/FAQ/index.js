import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FaqAccordionComponent = (props) => {
  const { question = "", answer = "" } = props;
  return (
    <Collapse accordion>
      <Panel header={question} key={(row, index) => index + 1}>
        {answer}
      </Panel>
    </Collapse>
  );
};

export default FaqAccordionComponent;
