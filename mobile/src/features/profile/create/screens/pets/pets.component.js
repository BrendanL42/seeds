import { React, useState } from "react";
import { Wrapper, Text } from "./pets.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Pets = ({ route, navigation }) => {
  const [pets, setPets] = useState("");

  const orignal = { ...route.params, pets: pets };

  return (
    <Wrapper>
      <Text>What about pets ?</Text>
      <TextInputVarOne
        placeholder="Enter Pets"
        onChangeText={(data) => setPets(data)}
        value={pets}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Children", orignal)}
        functionTwo={() => navigation.navigate("Profession", orignal)}
      />
    </Wrapper>
  );
};

export default Pets;
