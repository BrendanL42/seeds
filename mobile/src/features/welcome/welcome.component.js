import { React, useState } from "react";
import {Container, Title} from "./welcome.styles";
import { Text} from "react-native";
import { StatusBar } from "expo-status-bar";


export const Welcome = () => {
 
  return (
    <>
      <Container>
       <Text>Welcome, Here we can create a profile</Text>
      </Container>

      <StatusBar style="auto" />
    </>
  );
};

