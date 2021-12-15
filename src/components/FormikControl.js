// done No-31 form No-3 = 01-Dec-2021
import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButton from "./RadioButton";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import ChakraInput from "./ChakraInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "charkraInput":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
