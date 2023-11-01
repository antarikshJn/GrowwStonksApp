import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "@chakra-ui/react";

const Avataar = ({ name, size, backgroundColor, ...restProps }) => {
  return (
    <Avatar
      size={size}
      name={name}
      backgroundColor={backgroundColor}
      {...restProps}
    />
  );
};

Avataar.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Avataar.defaultProps = {
  name: "",
  size: "md",
  backgroundColor: "",
};

export default Avataar;
