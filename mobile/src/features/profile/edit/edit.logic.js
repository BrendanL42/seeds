import { useState, useEffect } from "react";
import { mongoDBRequest } from "../../../services/api/dbRequest";
import * as SecureStore from "expo-secure-store";

const Logic = () => {
  const [storage, setStorage] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    checkStore();
  }, []);

  useEffect(() => {
    storage &&
      mongoDBRequest(`user/?_id=${storage._id}`, "GET")
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          console.log("Errror", err);
        });
  }, [storage]);

  const checkStore = async () => {
    const _user = await SecureStore.getItemAsync("user");
    setStorage(JSON.parse(_user));
  };

  return { user };
};

export default Logic;
