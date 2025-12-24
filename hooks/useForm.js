import { useEffect, useState } from "react";
import { validator } from "../src/utlis/validatePassword";

// function to update the state
const handleOnChange = (e, form, setForm) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [passwordError, setPasswordError] = useState([]);

  // only when password and confirmPassword change
  useEffect(() => {
    const errorArg = validator(form.password, form.confirmPassword);
    setPasswordError(errorArg);
  }, [form.password, form.confirmPassword]);

  return {
    form,
    setForm,
    passwordError,
    handleOnchange: (e) => handleOnChange(e, form, setForm), 
  };
};

export default useForm;

