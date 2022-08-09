import React from "react";
import { Wrapper, Text } from "./particulars.styles";

const Particulars = (props) => {
  const user = props.user;
  return (
    <Wrapper>
      <Text>{user.activism}</Text>
      <Text>{user.age}</Text>
      <Text>{user.astrologySign}</Text>
      <Text>{user.children}</Text>
      <Text>{user.diet}</Text>
      <Text>{user.education}</Text>
      <Text>{user.exercise}</Text>
      <Text>{user.gender}</Text>
      <Text>{user.height}</Text>
      <Text>{user.interestedIn}</Text>
      <Text>{user.location}</Text>
      <Text>{user.lookingFor}</Text>
      <Text>{user.pets}</Text>
      <Text>{user.politics}</Text>
      <Text>{user.profession}</Text>
      <Text>{user.religion}</Text>
      <Text>{user.preferredName}</Text>
      <Text>{user.veganSince}</Text>
    </Wrapper>
  );
};

export default Particulars;
