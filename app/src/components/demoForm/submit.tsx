import React from "react";
import { Button } from "react-bootstrap";
import { checkPropTypes } from "prop-types";

type props = {
  formValid: boolean;
};

const SubmitButton = (props: props) => {
  return (
    <div className="text-center">
      <Button size={"lg"} disabled={!props.formValid} variant={"success"}>
        Submit
      </Button>
    </div>
  );
};

export default SubmitButton;
