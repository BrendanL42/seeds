import styled from "styled-components/native";

const sizeVariant = {
  s: 1,
  m: 2,
  l: 3,
  xl: 4,
  xxl: 5,
  xxxl: 6
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.DefaultProps = {
  position: "top",
  size: "small",
};
