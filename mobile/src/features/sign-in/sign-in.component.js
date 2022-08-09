import React from "react";
import logic from "./sign-in.logic";
import { StyledView, StyledText } from "./sign-in.styles";
import { StatusBar } from "expo-status-bar";
import { Button, TextInput } from "react-native-paper";
import { Spacer } from "../../components/spacer/spacer.component";

export const SignIn = () => {
  const { value, error, makeRequest, setInputs, email, password } = logic();
  return (
    <StyledView>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setInputs("email", text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setInputs("password", text)}
      />

      <Button mode="contained" onPress={() => makeRequest()}>
        Save
      </Button>

      <StyledText>
        Welcome {value.name} {value.surname} {error}
      </StyledText>
      <StatusBar style="auto" />
    </StyledView>
  );
};
