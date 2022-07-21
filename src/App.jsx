import { Component } from "react";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <Header />
        <Form abc={this.formSubmitHandler} />
      </Container>
    );
  }
}

export default App;
