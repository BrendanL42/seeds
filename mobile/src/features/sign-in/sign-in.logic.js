import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../utils/context";

const logic = () => {
  const { signIn } = useContext(AuthContext);
  const [value, setValue] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const setInputs = (type, value) => {
    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const makeRequest = () => {
    signIn({ email, password });
  };

  return {
    value,
    error,
    makeRequest,
    setInputs,
    email,
    password,
  };
};

export default logic;
