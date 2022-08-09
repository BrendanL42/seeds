import { React, useState } from "react";
import { Wrapper, Text } from "./vegan-since.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const VeganSince = ({ route, navigation }) => {
  const [veganSince, setVeganSince] = useState("");

  const orignal = { ...route.params, veganSince: veganSince };

  return (
    <Wrapper>
      <Text>When did you start eating like this ?</Text>
      <TextInputVarOne
        placeholder="Enter Vegan Since"
        onChangeText={(data) => setVeganSince(data)}
        value={veganSince}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Diet", orignal)}
        functionTwo={() => navigation.navigate("Exercise", orignal)}
      />
    </Wrapper>
  );
};

export default VeganSince;
