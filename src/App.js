import "./App.css";
import GeneralInformation from "./components/general-components/General-Information";
import EducationalExperience from "./components/Educational-Experience";
import PracticalExperience from "./components/Practical-Experience";
import BasicInfo from "./components/Basic-info";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralInformation />
        <BasicInfo />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;
