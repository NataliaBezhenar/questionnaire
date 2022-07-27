import { Component } from "react";

class InputError extends Component {
  render() {
    const { errors } = this.props.inputErrors;

    return (
      <>
        {Object.keys(errors).map((errorItem) => {
          if (errorItem.includes(this.props.nameOfInput)) {
            return (
              <p key={Math.random()} className="form__error">
                {errors[errorItem]}
              </p>
            );
          }
        })}
      </>
    );
  }
}
export default InputError;
