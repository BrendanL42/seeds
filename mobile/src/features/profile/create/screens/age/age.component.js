import { React, useState } from "react";
import { Wrapper, Text } from "./age.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Age = ({ route, navigation }) => {
  const [age, setAge] = useState("");

  const orignal = { ...route.params, age: age };

  return (
    <Wrapper>
      <Text>How old are you ?</Text>
      <TextInputVarOne
        placeholder="Enter Age"
        onChangeText={(data) => setAge(data.replace(/[^0-9]/g, 0))}
        value={age}
        keyboardType="numeric"
        maxLength={2}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Preferred Name", orignal)}
        functionTwo={() => navigation.navigate("Height", orignal)}
      />
    </Wrapper>
  );
};

export default Age;
