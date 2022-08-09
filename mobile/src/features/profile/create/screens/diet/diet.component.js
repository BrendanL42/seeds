import { React, useState } from "react";
import { Wrapper, Text } from "./diet.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Diet = ({ route, navigation }) => {
  const [diet, setDiet] = useState("");

  const orignal = { ...route.params, diet: diet };

  return (
    <Wrapper>
      <Text>Whats your diet ?</Text>
      <TextInputVarOne
        placeholder="Enter Diet"
        onChangeText={(data) => setDiet(data)}
        value={diet}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Location", orignal)}
        functionTwo={() => navigation.navigate("Vegan Since", orignal)}
      />
    </Wrapper>
  );
};

export default Diet;
