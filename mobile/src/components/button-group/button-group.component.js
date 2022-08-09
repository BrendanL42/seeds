import React from "react";
import { Button } from "react-native-paper";
import { Container } from "./button-group.styles";

export const ButtonGroup = (props) => {
  return (
    <Container>
      <Button
        action={props.action}
        mode="contained"
        onPress={props.functionOne}
      >
        {props.nameOne}
      </Button>

      <Button
        mode="contained"
        onPress={props.functionTwo}
        action={props.action}
      >
        {props.nameTwo}
      </Button>
    </Container>
  );
};
