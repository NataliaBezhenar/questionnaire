import { Component } from "react";
import "./Form.css";

import Buttons from "../Buttons/Buttons";
import TextAreas from "../TextAreas/TextAreas";
import Inputs from "../Inputs/Inputs";
import formValidation from "../../services/formValidation";

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

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE, errors: {} };
    this.formValidation = formValidation.bind(this);
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

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
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
