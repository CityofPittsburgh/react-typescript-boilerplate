import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import * as types from "../../store/types";
import Input from "../formElements/input";
import Select from "../formElements/select";
import TextArea from "../formElements/textarea";
import Cleave from "../formElements/cleave";

type state = {
  input: string;
  select: types.select;
  textarea: string;
  cleave: string;
};

const Form = () => {
  const [input, setInput] = useState<state["input"]>("");
  const [select, setSelect] = useState<state["select"]>(undefined);
  const [textarea, setTextarea] = useState<state["textarea"]>("");
  const [cleave, setCleave] = useState<state["cleave"]>("");

  return (
    <Container>
      <Col md={12}>
        <Input
          value={input}
          placeholder="Input here"
          header="Input header"
          required={true}
          callback={e => setInput(e.target.value)}
        />
        <TextArea
          value={textarea}
          placeholder="Textarea here"
          header="Textarea header"
          required={true}
          callback={e => setTextarea(e.target.value)}
        />
        <Select
          value={select}
          placeholder="Select here"
          header="Select header"
          required={true}
          multi={true}
          onChange={e => setSelect(e)}
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" }
          ]}
        />
        <Cleave
          value={cleave}
          placeholder="Cleave here"
          header="Cleave header"
          required={true}
          callback={e => setCleave(e.target.value)}
          options={{ creditCard: true }}
        />
      </Col>
    </Container>
  );
};

export default Form;
