import React from "react";

const InputField = (props) => {
  const { type, id, placeholder } = props;
  return (
    <div>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
