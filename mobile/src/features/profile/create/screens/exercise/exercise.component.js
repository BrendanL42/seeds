import { React, useState } from "react";
import { Wrapper, Text } from "./exercise.styles";

import TextInputVarOne from "../../../../../components/text-input/text-input-var-one.component";

import { ButtonGroup } from "../../../../../components/button-group/button-group.component";

const Exercise = ({ route, navigation }) => {
  const [exercise, setExercise] = useState("");

  const orignal = { ...route.params, exercise: exercise };


  return (
    <Wrapper>
      <Text>How much physical activity do you get ?</Text>
      <TextInputVarOne
        placeholder="Enter Exercise"
        onChangeText={(data) => setExercise(data)}
        value={exercise}
      />
      <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Vegan Since", orignal)}
        functionTwo={() => navigation.navigate("Interested In", orignal)}
      />
    </Wrapper>
  );
};

export default Exercise;
