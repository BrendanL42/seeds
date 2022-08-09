import React from "react";
import {Container} from "./swipe-screen.styles"
import { Swipe } from "../../features/swipe/swipe.component";
import { LikeUnlike } from "../../features/like-unlike/like-unlike.component";
import { Spacer } from "../../components/spacer/spacer.component";

export const SwipeScreen = () => {
  return (
    <Container>
      <Swipe />
      <LikeUnlike />
    </Container>
  );
};
