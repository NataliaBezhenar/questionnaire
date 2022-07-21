import { Component } from "react";
import Form from "./components/Form/Form";

class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return <Form abc={this.formSubmitHandler} />;
  }
}

export default App;
