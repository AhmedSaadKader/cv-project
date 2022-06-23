const wrapperComponent = (Component, name, checkIcon, editIcon, inputStyle, displayStyle, deleteIcon) => () =>
  (
    <Component
      name={name}
      checkIcon={checkIcon}
      editIcon={editIcon}
      inputStyle={inputStyle}
      displayStyle={displayStyle}
      deleteIcon={deleteIcon}
    />
  );

export default wrapperComponent;
