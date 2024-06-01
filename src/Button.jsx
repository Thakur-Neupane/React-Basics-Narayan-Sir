import React from "react";
import ButtonField from "./buttonField";

const Button = ({ Submit, clickMe }) => {
  return (
    <div>
      <button>
        <ButtonField name={Submit} function={clickMe} />
      </button>
    </div>
  );
};

export default Button;
