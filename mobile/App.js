import React, { useEffect } from "react";

import styled from "styled-components/native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Spacer } from "./src/components/spacer/spacer.component";
import { AuthContext } from "./src/utils/context";
import AuthLogic from "./src/utils/auth";

import * as SecureStore from "expo-secure-store";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SwipeScreen } from "./src/screens/swipe/swipe.screen";
import { SignUpScreen } from "./src/screens/sign-up/sign-up.screen";
import { SignInScreen } from "./src/screens/sign-in/sign-in.screen";
import { WelcomeScreen } from "./src/screens/welcome/welcome-screen";

import PreferredName from "./src/features/profile/create/screens/preferred-name/preferred-name.component";
import Age from "./src/features/profile/create/screens/age/age.component";
import Height from "./src/features/profile/create/screens/height/height.component";
import Gender from "./src/features/profile/create/screens/gender/gender.component";
import Location from "./src/features/profile/create/screens/location/location.component";
import Diet from "./src/features/profile/create/screens/diet/diet.component";
import VeganSince from "./src/features/profile/create/screens/vegan-since/vegan-since.component";
import Exercise from "./src/features/profile/create/screens/exercise/exercise.component";
import InterestedIn from "./src/features/profile/create/screens/interested-in/interested-in.component";
import LookingFor from "./src/features/profile/create/screens/looking-for/looking-for.component";
import Children from "./src/features/profile/create/screens/children/children.component";
import Pets from "./src/features/profile/create/screens/pets/pets.component";
import Profession from "./src/features/profile/create/screens/profession/profession.component";
import Education from "./src/features/profile/create/screens/education/education.component";
import Activism from "./src/features/profile/create/screens/activism/activism.component";
import AstrologySign from "./src/features/profile/create/screens/astrology-sign/astrology.component";
import Politics from "./src/features/profile/create/screens/politics/politics.component";
import Religion from "./src/features/profile/create/screens/religion/religion.component";

import { EditProfileScreen } from "./src/screens/edit-profile/edit-profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const SignOutBtn = styled.Button``;

const Text = styled.Text``;

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const { state, authContext } = AuthLogic();

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider theme={theme}>
        <StyledSafeArea>
          <NavigationContainer>
            {state.userToken === null ? (
              <>
                <Tab.Navigator>
                  <Tab.Screen name="Sign  Up" component={SignUpScreen} />
                  <Tab.Screen name="Sign In" component={SignInScreen} />
                </Tab.Navigator>
              </>
            ) : (
              <>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: true,
                    cardStyle: {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {state.newAccount ? (
                    <>
                      {/* <Stack.Screen
                        name="Welcome Sreen"
                        component={WelcomeScreen}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      /> */}

                      <Stack.Screen
                        name="Preferred Name"
                        component={PreferredName}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Age"
                        component={Age}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Height"
                        component={Height}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Gender"
                        component={Gender}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Location"
                        component={Location}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Diet"
                        component={Diet}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Vegan Since"
                        component={VeganSince}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Exercise"
                        component={Exercise}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Interested In"
                        component={InterestedIn}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Looking For"
                        component={LookingFor}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />

                      <Stack.Screen
                        name="Children"
                        component={Children}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Pets"
                        component={Pets}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Profession"
                        component={Profession}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Education"
                        component={Education}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Activism"
                        component={Activism}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Astrology Sign"
                        component={AstrologySign}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Politics"
                        component={Politics}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="Religion"
                        component={Religion}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Stack.Screen
                        name="EditProfile"
                        component={EditProfileScreen}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Tab.Screen
                        name="EditProfile"
                        component={EditProfileScreen}
                        options={{
                          headerLeft: (props) => <Text {...props} />,
                        }}
                      />
                      <Tab.Screen
                        name="Swipe"
                        component={SwipeScreen}
                        options={{
                          headerRight: (props) => (
                            <SignOutBtn
                              onPress={() => authContext.signOut()}
                              title="Sign Out"
                            />
                          ),
                        }}
                      />
                    </>
                  )}
                </Stack.Navigator>
              </>
            )}
          </NavigationContainer>
        </StyledSafeArea>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
