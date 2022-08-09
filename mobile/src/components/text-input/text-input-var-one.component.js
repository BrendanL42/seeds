import React from "react";
import { TextInput } from "./text-input-var-one.styles";

const TextInputVarOne = (props) => {
  return (
    <>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        onBlur={props.onBlur}
        onEndEditing={props.onEndEditing}
      />
    
    </>
  );
};

export default TextInputVarOne;
