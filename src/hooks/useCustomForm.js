import { useState, useEffect }  from "react";

const useCustomForm = ({ initValues, onSubmit }) => {
  const [ values, setValues ] = useState(initValues || {});
  const [ submit, setSubmit ] = useState(false);

  useEffect( () => {
    if (submit) {
      setValues(initValues);
      setSubmit(false);
    }
  }, [ initValues, submit ]);

  const changeFormHandler = e => {
    const { target } = e;
    const { value } = target;
    setValues({ ...values, name: value });
  };
  
  const submitFormHandler = e => {
    e.preventDefault();
    setSubmit(true);
    onSubmit(values);
  };

  return {
    values,
    changeFormHandler,
    submitFormHandler
  }

};

export default useCustomForm;