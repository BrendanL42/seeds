import React from "react";
import { Wrapper, Text } from "./images.style";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const Images = async () => {
  const result = await launchImageLibrary();
  console.log(result);
  return (
    <Wrapper>
      <Text>Images</Text>
    </Wrapper>
  );
};

export default Images;
