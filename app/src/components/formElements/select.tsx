import  React from "react";
import Select from "react-select";
import { Form } from "react-bootstrap";
import Required from "./required";

type props = {
  value: string;
  placeholder: string;
  header: string;
  required: boolean;
  options: Array<object>;
  multi: boolean;
  onChange: (selects: any) => void;
};

const SelectElement = (props: props) => {
  return (
    <Form.Group>
      <Form.Label>
        {props.header}
        {props.required && <Required />}
      </Form.Label>
      <Select
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        options={props.options}
        closeMenuOnSelect={!props.multi}
        blurInputOnSelect={!props.multi}
        simpleValue={props.multi}
        removeSelected={props.multi}
        isMulti={props.multi}
        clearable={props.multi}
      />
    </Form.Group>
  );
};

export default SelectElement;