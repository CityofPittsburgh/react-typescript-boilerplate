import React from "react";

type props = {
  content: string;
  style?: object;
};

const FormHeader = (props: props) => {
  return <h1 style={props.style ? props.style : null}>{props.content}</h1>;
};

export default FormHeader;
