import "./App.css";
import UserForm from "./components/Form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import User from './components/User'

//intial form values
const intitialFormValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: "false",
};

const url = "https://reqres.in/api/users";

export default function App() {
  //Need state to hold the values of the form
  const [formValues, setFormValues] = useState(intitialFormValues);
  const [users, setUsers] = useState([]);

  //Need to update the form
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    };
    postNewUser(newUser);
  };

  // axios.post(`${url}`, newUser);

  //get current users and put in state
  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  const postNewUser = (newUser) => {
    axios
      .post(`${url}`, newUser)
      .then((res) => {
        setUsers([...users, res.data.data]);
        setFormValues(intitialFormValues);
      })
      .catch((err) => {
        debugger;
      });
  };

  return (
    <div className="App">
      <h1>charlie is here</h1>
      <UserForm values={formValues} update={updateForm} submit={submitForm} />
      {users.map(user => {
        return <User details={user}  />
      })}
    </div>
  );
}
