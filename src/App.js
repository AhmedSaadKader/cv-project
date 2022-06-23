import "./App.css";
import GeneralComponents from "./components/general-components/GeneralComponents";
import EducationalExperience from "./components/Education/Educational-Experience";
import PracticalExperience from "./components/work/Practical-Experience";
import BasicInfo from "./components/NameAndTitle/Basic-info";
import Skills from "./components/skills/Skills";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralComponents />
        <Skills />
        <BasicInfo />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;
