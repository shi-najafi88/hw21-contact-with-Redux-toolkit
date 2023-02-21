import React, { useState } from "react";

export const useInput = (validator) => {
  const [values, setValue] = useState('');

  const ValueChangeHandler = (event) => {
    setValue(event.target.value);
    validator()
  };
  return { values, ValueChangeHandler };
};
