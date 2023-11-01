import React from "react";
import PropTypes from "prop-types";
import { Text, Wrap } from "@chakra-ui/react";

import CompanyOverviewReader from "@/readers/CompanyOverview.reader";

import ProductTagItem from "./ProductTagItem";

import style from "./ProductInfo.module.css";

const ProductTags = ({ productDetails }) => {
  return (
    <div className={style.description}>
      <Text>{CompanyOverviewReader.Description(productDetails)}</Text>
      <Wrap spacing={1} py={3}>
        <ProductTagItem
          label="INDUSTRY"
          value={CompanyOverviewReader.Industry(productDetails)}
        />
        <ProductTagItem
          label="SECTOR"
          value={CompanyOverviewReader.Sector(productDetails)}
        />
      </Wrap>
    </div>
  );
};

ProductTags.propTypes = {
  productDetails: PropTypes.object,
};

ProductTags.defaultProps = {
  productDetails: {},
};

export default ProductTags;
