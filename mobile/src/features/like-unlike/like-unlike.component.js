import { React, useState } from "react";
import { LikeUnlikeView } from "./like-unlike.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import { StatusBar } from "expo-status-bar";

import ThumbUp from "../../../assets/thumbs-up.svg";
import ThumbDown from "../../../assets/thumbs-down.svg";
import SuperLike from "../../../assets/super-like.svg";

export const LikeUnlike = () => {
  return (
    <>
      <LikeUnlikeView>
        <ThumbUp width={70} height={70} />
        <SuperLike
          style={[
            {
              transform: [{ rotateX: "180deg" }],
            },
          ]}
          width={70}
          height={70}
        />
        <ThumbDown width={70} height={70} />
      </LikeUnlikeView>
      <StatusBar style="auto" />
    </>
  );
};
