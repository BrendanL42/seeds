import { React, useState } from "react";
import {} from "./swipe.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import { Dimensions, Image, View, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import ImageOne from "../../../assets/one.jpeg";
import ImageTwo from "../../../assets/two.jpeg";
import ImageThree from "../../../assets/three.jpeg";
import { PanGestureHandler } from "react-native-gesture-handler";

const profiles = [
  { id: "1", uri: ImageOne },
  { id: "2", uri: ImageTwo },
  { id: "3", uri: ImageThree },
];
let index = 0;

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;

export const Swipe = () => {
  const [profile, setProfile] = useState(profiles[0]);
  const [nextProfile, setNextProfile] = useState(profiles[1]);
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  const y = new Animated.Value(0);

  const TopOrBottom = y.interpolate({
    inputRange: [0, SCREEN_HEIGHT / 2 - 1, SCREEN_HEIGHT / 2],
    outputRange: [1, 1, -1],
    extrapolate: "clamp",
  });

  const handlePan = Animated.event(
    [
      {
        nativeEvent: { translationX: translateX, translationY: translateY, y },
      },
    ],
    { useNativeDriver: true }
  );

  const rotate = Animated.multiply(translateX, TopOrBottom).interpolate({
    inputRange: [-500, 500],
    outputRange: [`-30deg`, `30deg`],
    extrapolate: "clamp",
  });

  const handlePanStateChange = ({ nativeEvent }) => {
    const { state, translationX } = nativeEvent;
    if (state === 5) {
      //When the user takes their finger off the screen
      if (translationX > 185 || translationX < -185) {
        setProfile(nextProfile);
        setNextProfile(profiles[++index % 3]);
      } else reset.start();
    }
  };

  const reset = Animated.parallel([
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }),
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }),
  ]);

  return (
    <>
      <View style={styles.card}>
        <Image style={styles.image} source={nextProfile.uri} />
      </View>

      <PanGestureHandler
        onGestureEvent={handlePan}
        onHandlerStateChange={handlePanStateChange}
      >
        <Animated.View
          style={[
            styles.card,
            { transform: [{ translateX }, { translateY }, { rotate }] },
          ]}
        >
          <View>
            <Image style={styles.image} source={profile.uri} />
          </View>
        </Animated.View>
      </PanGestureHandler>

      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    borderRadius: 20,
    height: SCREEN_HEIGHT - 270,
    width: SCREEN_WIDTH - 10,
    margin: 7,
  },
});
