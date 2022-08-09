import {React, useState} from "react";
import { Wrapper, Text } from "./education.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

 const Education = ({ route, navigation}) => {

  const [education, setEducation] = useState("");

  const orignal = { ...route.params, education: education };


  return (
    <Wrapper>
      <Text>What education do you have ?</Text>
       <TextInputVarOne
        placeholder="Enter Education"
        onChangeText={(data) => setEducation(data)}
        value={education}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Profession", orignal)}
        functionTwo={() => navigation.navigate("Activism", orignal)}
      />
    </Wrapper>
  );
};

export default Education

