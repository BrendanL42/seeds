import { React, useState } from "react";
import { Wrapper,Text } from "./location.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Location = ({ route, navigation }) => {

  const [location, setLocation] = useState("");

  const orignal = { ...route.params, location: location };

  return (
    <Wrapper>
      <Text>Where are you living ?</Text>
      <TextInputVarOne
        placeholder="Enter Location"
        onChangeText={(data) => setLocation(data)}
        value={location}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Gender", orignal)}
        functionTwo={() => navigation.navigate("Diet", orignal)}
      />
    </Wrapper>
  );
};

export default Location;
