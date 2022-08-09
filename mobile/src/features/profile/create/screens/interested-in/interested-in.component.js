import { React, useState } from "react";
import { Wrapper, Text } from "./interested-in.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const InterestedIn = ({ route, navigation }) => {
  const [interestedIn, setInterestedIn] = useState("");

  const orignal = { ...route.params, interestedIn: interestedIn };

  return (
    <Wrapper>
      <Text>Who takes your fancy ?</Text>
      <TextInputVarOne
        placeholder="Enter Interested In"
        onChangeText={(data) => setInterestedIn(data)}
        value={interestedIn}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Exercise", orignal)}
        functionTwo={() => navigation.navigate("Looking For", orignal)}
      />
    </Wrapper>
  );
};

export default InterestedIn;
