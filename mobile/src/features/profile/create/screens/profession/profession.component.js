import { React, useState } from "react";
import { Wrapper , Text} from "./profession.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Profession = ({ route, navigation }) => {
  const [profession, setProfession] = useState("");

  const orignal = { ...route.params, profession: profession };

  return (
    <Wrapper>
      <Text>Do you have a job ?</Text>
      <TextInputVarOne
        placeholder="Enter Profession"
        onChangeText={(data) => setProfession(data)}
        value={profession}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Pets", orignal)}
        functionTwo={() => navigation.navigate("Education", orignal)}
      />
    </Wrapper>
  );
};

export default Profession;
