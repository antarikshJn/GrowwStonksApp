import React from "react";
import PropTypes from "prop-types";

import Footer from "../Footer";
import Header from "../Header";
import PropertyControlledComponent from "../PropertyControlledComponent";
import { Flex, Spacer } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <PropertyControlledComponent
        controllerProperty={children}
        fallback={<Spacer />}
      >
        {children}
      </PropertyControlledComponent>
      <Footer />
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
