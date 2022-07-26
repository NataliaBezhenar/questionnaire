import { Component } from "react";

class Inputs extends Component {
  render() {
    const { errors } = this.props.textValue;
    return (
      <div className="form__inputs-group">
        <div className="input-field">
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={this.props.textValue.firstName}
              onChange={this.props.onInputChange}
              placeholder="John"
            />
          </label>
          {Object.keys(errors).map((key) => {
            if (key.includes("firstName")) {
              return (
                <p key={Math.random()} className="form__error">
                  {errors[key]}
                </p>
              );
            }
          })}
        </div>

        <div className="input-field">
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={this.props.textValue.lastName}
              onChange={this.props.onInputChange}
              placeholder="Johnson"
            />
          </label>
          {Object.keys(errors).map((key) => {
            if (key.includes("lastName")) {
              return (
                <p key={Math.random()} className="form__error">
                  {errors[key]}
                </p>
              );
            }
          })}
        </div>

        <div className="input-field">
          <label>
            Birth Date
            <input
              type="date"
              min="1950-01-01"
              max="2022-12-31"
              name="birthDate"
              value={this.props.textValue.birthDate}
              onChange={this.props.onInputChange}
              //required
            />
          </label>
        </div>

        <div className="input-field">
          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              value={this.props.textValue.phone}
              onChange={this.props.onInputChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              //required
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
              value={this.props.textValue.site}
              onChange={this.props.onInputChange}
              placeholder="https://developer.mozilla.org/"
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Inputs;
