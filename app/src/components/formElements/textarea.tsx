import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Required from "./required";

type props = {
  value: string;
  placeholder: string;
  header: string;
  required: boolean;
  callback: (value: any) => void;
};

type state = {
  height: string;
};

const Textarea = (props: props) => {
  const [height, setHeight] = useState<state["height"]>("100px");

  function calcHeight(element) {
    let newHeight = element.target.scrollHeight;
    if (newHeight > 98) {
      setHeight(newHeight + "px");
    }
    if (element.target.value == "") {
      setHeight("100px");
    }
  }

  return (
    <Form.Group>
      <Form.Label>
        {props.header}
        {props.required && <Required />}
      </Form.Label>
      <Form.Control
        as="textarea"
        onKeyUp={e => calcHeight(e)}
        onFocus={e => calcHeight(e)}
        value={props.value}
        placeholder={props.placeholder}
        style={{ height: height }}
        onChange={v => props.callback(v)}
      />
    </Form.Group>
  );
};

export default Textarea;