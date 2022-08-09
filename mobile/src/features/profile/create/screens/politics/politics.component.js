import {React, useState} from "react";
import { Wrapper, Text } from "./politics.styles";


import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

 const Politics = ({ route, navigation}) => {

  const [politics, setPolitics] = useState("");

  const orignal = { ...route.params, politics: politics };


  return (
    <Wrapper>
      <Text>Political views ?</Text>
       <TextInputVarOne
        placeholder="Enter Politics"
        onChangeText={(data) => setPolitics(data)}
        value={politics}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Astrology Sign", orignal)}
        functionTwo={() => navigation.navigate("Religion", orignal)}
      />
    </Wrapper>
  );
};

export default Politics

