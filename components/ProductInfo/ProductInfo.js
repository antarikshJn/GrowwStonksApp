import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/react";

import CompanyOverviewReader from "@/readers/CompanyOverview.reader";

import Fundamentals from "../Fundamentals";

import style from "./ProductInfo.module.css";
import ProductTags from "./ProductTags";

const ProductInfo = ({ productDetails }) => {
  return (
    <div className={style.companyInfo}>
      <Heading size="md" className={style.aboutCompany}>
        About {CompanyOverviewReader.Name(productDetails)}
      </Heading>
      <ProductTags productDetails={productDetails} />
      <Fundamentals productDetails={productDetails} />
    </div>
  );
};

ProductInfo.propTypes = {
  productDetails: PropTypes.object,
};

ProductInfo.defaultProps = {
  productDetails: {},
};

export default ProductInfo;
