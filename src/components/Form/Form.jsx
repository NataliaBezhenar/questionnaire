import { useState, useEffect } from "react";
import styles from "./Form.module.css";

import Buttons from "../Buttons";
import TextAreas from "../TextAreas";
import Inputs from "../Inputs";
import { validatePhoneNumber } from "../../services/validatePhoneNumber";
import { formValidation } from "../../services/formValidation";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  birthDate: "",
  phone: "",
  site: "",
  about: "",
  technologies: "",
  project: "",
};

export default function Form() {
  const initialValues = INITIAL_STATE;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onBlur = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const resetForm = () => {
    setFormValues(INITIAL_STATE);
    setFormErrors({});
    setIsSubmit(false);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, formValues, isSubmit]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormValues({ ...formValues, [name]: validatePhoneNumber(value) });
      return;
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(() => formValidation(formValues));

    // setFormErrors(formValidation(formValues));
    // setIsSubmit(true);
  };

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Success</div>
      ) : (
        <div>Review needed</div>
      )}
      <form className={styles.form} onSubmit={handleSubmit} onReset={resetForm}>
        <Inputs
          onInputChange={handleChange}
          textValue={formValues}
          onBlur={onBlur}
          formErrors={formErrors}
        />
        <TextAreas
          onTextAreaChange={handleChange}
          textValue={formValues}
          onBlur={onBlur}
          formErrors={formErrors}
        />
        <Buttons />
      </form>
    </>
  );
}
