import {React, useState} from "react";
import { Wrapper, Text } from "./looking-for.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

 const LookingFor = ({ route, navigation}) => {

  const [lookingFor, setLookingFor] = useState("");

  const orignal = { ...route.params, lookingFor: lookingFor };


  return (
    <Wrapper>
      <Text>What are you looking for ?</Text>
       <TextInputVarOne
        placeholder="Enter Looking For"
        onChangeText={(data) => setLookingFor(data)}
        value={lookingFor}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Interested In", orignal)}
        functionTwo={() => navigation.navigate("Children", orignal)}
      />
    </Wrapper>
  );
};

export default LookingFor

