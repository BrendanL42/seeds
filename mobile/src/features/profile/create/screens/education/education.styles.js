import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: #fff;
  padding: 0 15px; padding-top: ${(props) => props.theme.space[4]};;
`;


export const Text = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.light};
  letter-spacing: 1px;
  padding-top: ${(props) => props.theme.space[2]};
 
`;
