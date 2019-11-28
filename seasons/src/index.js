import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ErrorMsg from "./ErrorMsg";

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    console.log("component mounted");

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  //This is a helper method decides what content to render
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorMsg />;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Kindly accept location request" />;
  }

  // React says we must define render
  render() {
    return (
      //The border red wont show cos it wasnt styled,
      //its just an example of a case where we want all our results to show up in a specific styled container
      <div className="border red">{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
