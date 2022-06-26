const wrapperComponent = (Component, name, checkIcon, editIcon, inputStyle, displayStyle, inputType) => () =>
  (
    <Component
      name={name}
      checkIcon={checkIcon}
      editIcon={editIcon}
      inputStyle={inputStyle}
      displayStyle={displayStyle}
      inputType={inputType}
    />
  );

export default wrapperComponent;
