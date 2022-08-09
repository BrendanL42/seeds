import styled from "styled-components/native";

export const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
`;

