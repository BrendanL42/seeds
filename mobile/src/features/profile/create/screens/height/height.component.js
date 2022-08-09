import { React, useState } from "react";

import { Wrapper ,Text} from "./height.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Height = ({ navigation, route }) => {
  const [height, setHeight] = useState("");

  const orignal = { ...route.params, height: height };

  return (
    <Wrapper>
      <Text>How tall are you ?</Text>
      <TextInputVarOne
        placeholder="Enter Height"
        onChangeText={(data) => setHeight(data)}
        value={height}
        keyboardType="numeric"
        maxLength={4}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Age", orignal)}
        functionTwo={() => navigation.navigate("Gender", orignal)}
      />
    </Wrapper>
  );
};
3444;

export default Height;
3;
