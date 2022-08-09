import { React, useState } from "react";
import { Wrapper,Text } from "./activism.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Activism = ({ navigation, route }) => {
  const [activism, setActivism] = useState("");

  const orignal = { ...route.params, activism: activism };

  return (
    <Wrapper>
      <Text>Do you participate in activism?</Text>
      <TextInputVarOne
        placeholder="Enter Activism"
        onChangeText={(data) => setActivism(data)}
        value={activism}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Education", orignal)}
        functionTwo={() => navigation.navigate("Astrology Sign", orignal)}
      />
    </Wrapper>
  );
};

export default Activism;
