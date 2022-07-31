import { Component } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import ResultForm from "./components/ResultForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataRecieved = false;
  }

  formSubmitHandler = (data) => {
    this.setState({ answers: data, dataRecieved: true }, () => {});
  };

  componentDidMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          {this.state.dataRecieved ? (
            <ResultForm formData={this.state} />
          ) : (
            <Form onFormSubmit={this.formSubmitHandler} />
          )}
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
