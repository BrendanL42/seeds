import { useReducer, useMemo, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { mongoDBRequest } from "../services/api/dbRequest";

const AuthLogic = () => {
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      let user;
      try {
        userToken = await SecureStore.getItemAsync("userToken");
        user = await SecureStore.getItemAsync("user");
        user = JSON.parse(user);
        dispatch({ type: "RESTORE_TOKEN", token: userToken, user: user });
      } catch (e) {
        console.log("Restoring token failed", e);
      }
    };
    bootstrapAsync();
  }, []);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            user: action.user,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            newAccount: action.newAccount,
            user: action.user,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        signInRequest(data);
      },
      signOut: async () => {
        await SecureStore.deleteItemAsync("userToken");
        await SecureStore.deleteItemAsync("user");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        signUpRequest(data);
      },
      state: state,
    }),
    []
  );

  const signUpRequest = (data) => {
    const user = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    };
    mongoDBRequest("user/create", "POST", user)
      .then((data) => {
        if (data === "User Already Exists") {
          console.log("User Already Exists");
        } else {
          console.log("Success", data);
        }
      })
      .catch((err) => {
        console.log("Errror", err);
      });
  };

  const signInRequest = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    mongoDBRequest("sign-in", "POST", user)
      .then(async (data) => {
        if (data.token) {
          dispatch({
            type: "SIGN_IN",
            token: data.token,
            newAccount: data.newAccount,
            user: data.user,
          });

          const merged = { ...data.user, newAccount: data.newAccount };
          const userString = JSON.stringify(merged);
          await SecureStore.setItemAsync("userToken", data.token);
          await SecureStore.setItemAsync("user", userString);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return {
    authContext,
    state,
  };
};

export default AuthLogic;
