import React, { Component } from "react";
import image from "./professionalAvatar.jpg";
import styles from "./general.module.css";

class ProfessionalPhoto extends Component {
  render() {
    return (
      <div className={styles.photoDiv}>
        <img
          src={image}
          alt="Upload professional pic"
          width="100px"
          className={styles.professionalPhoto}
        />
      </div>
    );
  }
}

export default ProfessionalPhoto;
