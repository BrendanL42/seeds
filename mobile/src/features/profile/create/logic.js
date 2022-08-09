import { useState } from "react";
import { mongoDBRequest } from "../../../services/api/dbRequest";
import * as SecureStore from "expo-secure-store";

const Logic = () => {
  const [profile, setProfile] = useState({});
  const makeRequest = async (data) => {
    let user;
    user = await SecureStore.getItemAsync("user");
    user = JSON.parse(user);
    const merged = { ...data, newAccount: false, _id: user._id };
    mongoDBRequest("user/update", "PUT", merged)
      .then((data) => {
        setProfile(data);
        console.log("user", data);
        // update state newAccount to false
        // create global user profile
        // update global user profile
      })
      .catch((err) => {
        console.log("Errror", err);
      });
  };

  return { makeRequest };
};
export default Logic;
