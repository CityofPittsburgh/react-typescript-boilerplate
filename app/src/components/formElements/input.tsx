import React from "react";
import { Form } from "react-bootstrap";
import Required from "./required";

type props = {
  value: string;
  placeholder: string;
  header: string;
  required: boolean;
  callback: (value: any) => void;
};

const Input = (props: props) => {
  return (
    <Form.Group>
      <Form.Label>
        {props.header}
        {props.required && <Required />}
      </Form.Label>
      <Form.Control
        type="search"
        placeholder={props.placeholder}
        onChange={v => props.callback(v)}
        value={props.value}
      />
    </Form.Group>
  );
};

export default Input;
