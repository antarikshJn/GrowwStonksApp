import React from "react";
import PropTypes from "prop-types";

import { Heading, Text } from "@chakra-ui/react";

import Avataar from "../common/Avataar";
import Stats from "../common/Stats";

import styles from "./productHeader.module.css";
import QuoteReader from "@/readers/Quote.reader";

const ProductHeader = ({ name, ticker, assetType, exchange, quote }) => {
  return (
    <div className={styles.companyInfoStat}>
      <div className={styles.companySummaryWithAvataar}>
        <Avataar name={name} backgroundColor="#00b386" />
        <div className={styles.companySummary}>
          <Heading size="md">{name}</Heading>
          <Text>
            {ticker}, {assetType}
          </Text>
          <Text size="sm">{exchange}</Text>
        </div>
      </div>
      <div className={styles.stat}>
        <Stats
          currentValue={QuoteReader.price(quote)}
          percentageChange={QuoteReader.changePercent(quote)}
          change={QuoteReader.change(quote)}
        />
      </div>
    </div>
  );
};

ProductHeader.propTypes = {
  name: PropTypes.string,
  ticker: PropTypes.string,
  assetType: PropTypes.string,
  exchange: PropTypes.string,
  quote: PropTypes.object,
};

ProductHeader.defaultProps = {
  name: "",
  ticker: "",
  assetType: "",
  exchange: "",
  quote: {},
};

export default ProductHeader;
