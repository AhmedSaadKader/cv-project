import React, { Component } from "react";
import InputAndResult from "../basicComponents/InputAndResult";
import wrapper from "../basicComponents/Wrapper";
import styles from "./skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import wrapperComponent from "../basicComponents/Wrapper";

const inputSkillStyle = styles.skillsInput;
const displaySkillStyle = styles.skillsDisplayDiv;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;
const addIcon = <FontAwesomeIcon icon={faPlus} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const SkillElement = wrapperComponent(InputAndResult, "skill", checkIcon, editIcon, inputSkillStyle, displaySkillStyle);

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSkills: [{ skill: SkillElement, id: 0 }],
    };
  }

  addLink = () => {
    if (this.state.totalSkills.length < 3) {
      const NewSkill = wrapperComponent(
        InputAndResult,
        "skill",
        checkIcon,
        editIcon,
        inputSkillStyle,
        displaySkillStyle,
        deleteIcon
      );
      const linkWithID = { skill: NewSkill, id: this.state.totalSkills.length };
      this.setState({
        totalSkills: this.state.totalSkills.concat(linkWithID),
      });
    }
  };

  deleteLink = () => {
    this.setState({
      totalSkills: this.state.totalSkills.slice(0, -1),
    });
  };

  render() {
    return (
      <div className={styles.skillsDiv}>
        <h3 className={styles.skillsTitle}>
          Skills
          <div>
            <button onClick={this.addLink}>{addIcon}</button>
            <button onClick={this.deleteLink}>{deleteIcon}</button>
          </div>
        </h3>
        {this.state.totalSkills.map((item) => {
          const A = item.skill;
          return <A key={item.id} />;
        })}
      </div>
    );
  }
}

export default Skills;
