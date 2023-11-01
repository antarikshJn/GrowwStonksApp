import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@/components/common/Layout";

import { store } from "@/store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

App.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  Component: null,
  pageProps: {},
};
