import React from "react";
import PropTypes from "prop-types";

const Dialog = ({
  title,
  children,
  show,
  setShow,
  size = "md",
  bgColor = "bg-light",
}) => {
  return (
    <>
      <Modal
        onHide={() => setShow(false)}
        show={show}
        maxWidth={size}
        className={bgColor}
        style={{ overflowY: "unset" }}
      >
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Content sx={{ padding: 0 }}>{children}</Modal.Content>
      </Modal>
    </>
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Dialog;
