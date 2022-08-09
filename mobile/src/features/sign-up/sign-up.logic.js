import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../utils/context";

const logic = () => {
  "";
  const { signUp } = useContext(AuthContext);
  const [value, setValue] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   useEffect(() => {}, []);

  const setInputs = (type, value) => {
    switch (type) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const makeRequest = () => {
    signUp({ name, surname, email, password });
  };

  return {
    value,
    error,
    makeRequest,
    setInputs,
    name,
    surname,
    email,
    password,
  };
};

export default logic;
