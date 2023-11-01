import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/react";
import StatCards from "../StatCards";

const Fundamentals = ({ productDetails }) => {
  return (
    <div>
      <Heading size="sm" mb="4" mt="4" color="#44475b">
        Fundamentals
      </Heading>
      <StatCards companyInfo={productDetails} />
    </div>
  );
};

Fundamentals.propTypes = {
  productDetails: PropTypes.object,
};

Fundamentals.defaultProps = {
  productDetails: {},
};

export default Fundamentals;
