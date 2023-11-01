import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "@chakra-ui/react";

const Loader = ({ children }) => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

Loader.propTypes = {
  children: PropTypes.node,
};

Loader.defaultProps = {
  children: null,
};

export default Loader;
