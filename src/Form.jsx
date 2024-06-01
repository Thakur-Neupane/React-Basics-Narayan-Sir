import React from "react";
import InputField from "./inputField";
import Button from "./Button";

const Form = () => {
  return (
    <div>
      <form action="">
        <InputField
          type="email"
          id="email"
          placeholder="Please enter your Email"
        />

        <InputField
          type="text"
          id="phone"
          placeholder="Please enter your phone Number"
        />

        <Button
          buttonText="Add User"
          onClick={() => {
            alert("Hello Dented Code");
          }}
        />
        <Button
          buttonText="Click Me"
          onClick={() => {
            alert("Hello Dented Code");
          }}
        />
      </form>
    </div>
  );
};

export default Form;
