import "./App.css";
import GeneralInformation from "./components/General-Information";
import EducationalExperience from "./components/Educational-Experience";
import PracticalExperience from "./components/Practical-Experience";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;
