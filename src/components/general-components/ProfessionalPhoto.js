import React, { Component } from "react";
import image from "./professionalAvatar.jpg";
import styles from "./general.module.css";

class ProfessionalPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proImage: image,
    };
  }

  uploadImage = (e) => {
    const imageUploaded = URL.createObjectURL(e.target.files[0]);
    this.setState({
      proImage: imageUploaded,
    });
  };

  render() {
    return (
      <div className={styles.photoDiv}>
        <label>
          <input type="file" className={styles.inputImage} onChange={this.uploadImage} />
          <img
            src={this.state.proImage}
            alt="Upload professional pic"
            width="100px"
            className={styles.professionalPhoto}
          />
        </label>
      </div>
    );
  }
}

export default ProfessionalPhoto;
