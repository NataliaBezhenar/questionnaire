import { Component } from "react";
import "./Form.css";

import Buttons from "../Buttons/Buttons";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
    site: "",
    about: "",
    technologies: "",
    project: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      birthDate: "",
      phone: "",
      site: "",
      about: "",
      technologies: "",
      project: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.abc(this.state);

    this.resetForm();
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onReset={this.resetForm}
      >
        <div className="form__inputs-group">
          <div className="input-field">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                maxLength="50"
                minLength="2"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="John"
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                maxLength="50"
                minLength="2"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Johnson"
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Birth Date
              <input
                type="date"
                min="1950-01-01"
                max="2022-12-31"
                name="birthDate"
                value={this.state.birthDate}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                placeholder="123-123-1234"
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Your site
              <input
                type="text"
                name="site"
                maxLength="50"
                value={this.state.site}
                onChange={this.handleChange}
                placeholder="https://developer.mozilla.org/"
              />
            </label>
          </div>
        </div>

        <div className="form__text-areas">
          <div className="input-field">
            <label>
              About Yourself
              <textarea
                type="text"
                name="about"
                rows="7"
                cols="50"
                value={this.state.about}
                onChange={this.handleChange}
                placeholder="Few words about yourself..."
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Technologies Stack
              <textarea
                type="text"
                name="technologies"
                rows="7"
                cols="50"
                value={this.state.technologies}
                onChange={this.handleChange}
                placeholder="HTML5, CSS3, JavaScript..."
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              Last Project Description
              <textarea
                type="text"
                name="project"
                rows="7"
                cols="50"
                value={this.state.project}
                onChange={this.handleChange}
                placeholder="Describe your last project please"
              />
            </label>
          </div>
        </div>
        <Buttons />
      </form>
    );
  }
}

export default Form;
