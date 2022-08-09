import React from "react";
import logic from "./sign-up.logic";
import { StyledView, StyledText } from "./sign-up.styles";
import { StatusBar } from "expo-status-bar";
import { Button, TextInput } from "react-native-paper";
import { Spacer } from "../../components/spacer/spacer.component";

export const SignUp = () => {
  const { value, error, makeRequest, setInputs, name, surname, email, password } =
    logic();
  return (
    <StyledView>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setInputs("name", text)}
      />
      <TextInput
        label="Surname"
        value={surname}
        onChangeText={(text) => setInputs("surname", text)}
      />
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
