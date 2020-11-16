import { useState, useEffect }  from "react";
import PropTypes from "prop-types";

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

useCustomForm.propTypes = {
  initValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default useCustomForm;