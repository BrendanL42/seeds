import { React, useState } from "react";
import { Wrapper, DropDown, Text } from "./astrology.styles";


import { ButtonGroup } from "../../../../../components/button-group/button-group.component";


const AstrologySign = ({ route, navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Aquarius", value: "aquarius" },
    { label: "Pisces", value: "pisces" },
    { label: "Aries", value: "aries" },
    { label: "Taurus", value: "taurus" },
    { label: "Gemini", value: "gemini" },
    { label: "Cancer", value: "cancer" },
    { label: "Leo", value: "leo" },
    { label: "Virgo", value: "virgo" },
    { label: "Libra", value: "libra" },
    { label: "Scorpio", value: "scorpio" },
    { label: "Sagittarius ", value: "sagittarius" },
    { label: "Capricorn", value: "capricorn" },
  ]);


  const orignal = { ...route.params, astrologySign: value };


  return (
    <Wrapper>
      <Text>Whats you star sign ?</Text>
      <DropDown
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          backgroundColor: "#CCC",
        }}
        dropDownContainerStyle={{
          backgroundColor: "#dfdfdf",
        }}
      />
       <ButtonGroup
        nameOne={"Back"}
        nameTwo={"Next"}
        functionOne={() => navigation.navigate("Activism", orignal)}
        functionTwo={() => navigation.navigate("Politics", orignal)}
      />
    </Wrapper>
  );
};

export default AstrologySign;
