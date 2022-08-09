import {React, useState} from "react";
import { Wrapper, Text } from "./children.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

 const Children = ({ route, navigation}) => {

  const [children, setChildren] = useState("");

  const orignal = { ...route.params, children: children };


  return (
    <Wrapper>
      <Text>Have any children ?</Text>
       <TextInputVarOne
        placeholder="Enter Children"
        onChangeText={(data) => setChildren(data)}
        value={children}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Looking For", orignal)}
        functionTwo={() => navigation.navigate("Pets", orignal)}
      />
    </Wrapper>
  );
};

export default Children

