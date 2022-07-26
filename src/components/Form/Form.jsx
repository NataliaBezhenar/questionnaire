import { Component } from "react";
import "./Form.css";

import Buttons from "../Buttons/Buttons";
import TextAreas from "../TextAreas/TextAreas";
import Inputs from "../Inputs/Inputs";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  birthDate: "",
  phone: "",
  site: "",
  about: "",
  technologies: "",
  project: "",
  isSubmitted: false,
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE, errors: {} };
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE, errors: {} });
  };

  formValidation = () => {
    const { firstName, lastName } = this.state;
    console.log(firstName, lastName);
    let isValid = true;
    const errors = {};
    const regexp = /^[A-Z]/;
    if (firstName.trim().length === 0) {
      errors.firstNameIsRequired = "First name is required";
      isValid = false;
    }
    if (!regexp.test(firstName)) {
      errors.firstNameFirstLetter =
        "First name should start with the uppercase symbol";
      isValid = false;
    }
    if (lastName.trim().length === 0) {
      errors.lastNameIsRequired = "Last name is required";
      console.log(errors);
      isValid = false;
    }
    if (!regexp.test(lastName)) {
      errors.lastNameFirstLetter =
        "Last name should start with the uppercase symbol";
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
    console.log(this.state);
    console.log(isValid);
    if (isValid) {
      this.props.onFormSubmit(this.state);
      this.resetForm();
    }
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onReset={this.resetForm}
      >
        <Inputs onInputChange={this.handleChange} textValue={this.state} />
        <TextAreas
          onTextAreaChange={this.handleChange}
          textValue={this.state}
        />

        <Buttons />
      </form>
    );
  }
}

export default Form;
