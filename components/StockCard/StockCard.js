import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Heading, CardHeader } from "@chakra-ui/react";

import StockReader from "@/readers/Stock.reader";

import Avataar from "../common/Avataar";
import Stats from "../common/Stats";

import styles from "./StockCard.module.css";

const StockCard = ({ stockInfo }) => {
  return (
    <Card variant="filled" className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <Avataar name={StockReader.ticker(stockInfo)} opacity={0.6} />
        <Heading size="sm" color="#44475b">
          {StockReader.ticker(stockInfo)}
        </Heading>
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <Stats
          currentValueClassName={styles.currentValueClassName}
          currentValue={StockReader.price(stockInfo)}
          percentageChange={StockReader.change_percentage(stockInfo)}
          change={StockReader.change_amount(stockInfo)}
          size="sm"
        />
      </CardBody>
    </Card>
  );
};

StockCard.propTypes = {
  stockInfo: PropTypes.object,
};

StockCard.propTypes = {
  stockInfo: {},
};

export default StockCard;
