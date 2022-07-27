import { Component } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ResultForm from "./components/ResultForm/ResultForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataRecieved = false;
  }

  formSubmitHandler = (data) => {
    console.log("in App.js");
    this.setState({ answers: data, dataRecieved: true }, () => {
      console.log(this.state, "answers");
    });
  };

  render() {
    return (
      <>
        <Container>
          <Header />
          {this.state.dataRecieved && <ResultForm formData={this.state} />}
          {!this.state.dataRecieved && (
            <Form onFormSubmit={this.formSubmitHandler} />
          )}
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
