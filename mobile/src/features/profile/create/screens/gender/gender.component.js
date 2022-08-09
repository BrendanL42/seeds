import { React, useState } from "react";
import { Wrapper, Text } from "./gender.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Gender = ({ navigation, route }) => {

  const [gender, setGender] = useState("");

  const orignal = { ...route.params, gender: gender };

  return (
    <Wrapper>
       <Text>How do you identify?</Text>
      <TextInputVarOne
        placeholder="Enter Gender"
        onChangeText={(data) => setGender(data)}
        value={gender}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Height", orignal)}
        functionTwo={() => navigation.navigate("Location", orignal)}
      />
    </Wrapper>
  );
};

export default Gender;
