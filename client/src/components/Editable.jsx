// Editable.js
import React from "react";

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const Editable = ({content, isEditing, children}) => {

  return (
    <>
      {isEditing ? (<div>{children} </div>) : ( <div><span>{content}</span> </div>)}
    </>
  );
};

Editable.propTypes = {
    content: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
  };

export default Editable;
