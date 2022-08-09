import React from "react";
import { Wrapper, Text } from "./edit.style";
import Logic from "./edit.logic";
import Particulars from "./components/particulars/particulars.component";
import Images from "./components/images/images.component";

const EditProfile = () => {
  const { user } = Logic();

  return !user ? (
    <Wrapper>
      <Images />
      {/* <Particulars user={user} /> */}
    </Wrapper>
  ) : (
    <Wrapper>
      <Text>Loading...</Text>
    </Wrapper>
  );
};

export default EditProfile;
