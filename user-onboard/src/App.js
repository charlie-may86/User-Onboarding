import "./App.css";
import UserForm from "./components/Form";
import React, { useState } from "react";

//intial form values
const intitialFormValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: "false",
};

export default function App() {
  //Need state to hold the values of the form
  const [formValues, setFormValues] = useState(intitialFormValues);

  //Need to update the form
  const updateForm = (inputName, inputValue) => {
    
  }

  const submitForm = () => {
    
  }

  return (
    <div className="App">
      <h1>charlie is here</h1>
      <UserForm values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}
