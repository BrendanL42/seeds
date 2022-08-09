import { React, useState } from "react";
import { Wrapper, Text } from "./religion.styles";

import Logic from "../../logic";
import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Religion = ({ route, navigation }) => {
  const [religion, setReligion] = useState("");

  const { makeRequest } = Logic();

  const orignal = { ...route.params, religion: religion };

  return (
    <Wrapper>
      <Text>Are you religious ?</Text>
      <TextInputVarOne
        placeholder="Enter Religion"
        onChangeText={(data) => setReligion(data)}
        value={religion}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Politics", orignal)}
        functionTwo={() => {
          makeRequest(orignal), navigation.navigate("EditProfile", orignal);
        }}
      />
    </Wrapper>
  );
};

export default Religion;
