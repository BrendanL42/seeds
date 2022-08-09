import { React, useState } from "react";
import { Wrapper, Text } from "./preferred-name.styles";
import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const PreferredName = ({ navigation }) => {
  const [PreferredName, setPreferredName] = useState("");

  return (
    <Wrapper>
      <Text>What do you preferred to be called ?</Text>
      <TextInputVarOne
        placeholder="Preferred Name"
        onChangeText={(data) => setPreferredName(data)}
        value={PreferredName}
        maxLength={15}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => console.log("back", PreferredName)}
        functionTwo={() =>
          navigation.navigate("Age", { preferredName: PreferredName })
        }
      />
    </Wrapper>
  );
};

export default PreferredName;
