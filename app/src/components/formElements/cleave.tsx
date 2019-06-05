import React from "react";
import { Form } from "react-bootstrap";
import Cleave from "cleave.js/react";
import Required from "./required";

type props = {
  value: string;
  placeholder: string;
  header: string;
  required: boolean;
  options: object;
  callback: (value: any) => void;
};

const Flex = (props: props) => {
  return (
    <Form.Group>
      <Form.Label>
        {props.header}
        {props.required && <Required />}
      </Form.Label>
      <Cleave
        type="search"
        className="form-control"
        options={props.options}
        value={props.value}
        placeholder={props.placeholder}
        onChange={v => props.callback(v)}
      />
    </Form.Group>
  );
};

export default Flex;
