import { useState, useEffect }  from "react";

const useCustomForm = ({ initValues, onSubmit }) => {
  const [ values, setValues ] = useState(initValues || {});
  const [ submit, setSubmit ] = useState(false);
  const [ buttonValid, setButtonValid ] = useState(true);

  useEffect( () => {
    if (submit) {
      setValues(initValues);
      setButtonValid(true);
      setSubmit(false);
    }
  }, [ initValues, submit, buttonValid]);

  const changeFormHandler = e => {
    const { target } = e;
    const { value } = target;
    setValues({ ...values, name: value });

    if (value) setButtonValid(false);
    if(!value) setButtonValid(true);

  };
  
  const submitFormHandler = e => {
    e.preventDefault();
    setSubmit(true);
    onSubmit(values);
  };

  return {
    values,
    buttonValid,
    changeFormHandler,
    submitFormHandler
  }
};

export default useCustomForm;