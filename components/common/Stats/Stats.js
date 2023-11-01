import React from "react";
import PropTypes from "prop-types";

import { Stat, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { roundOffNumber } from "@/utils/formatters";

const Stats = ({ currency, currentValue, percentageChange, change, size }) => {
  const changeDirection = change >= 0 ? "increase" : "decrease";
  const color = change >= 0 ? "#00b386" : "#eb5b3c";
  return (
    <Stat size={size || "md"} align="start">
      <StatNumber color="#44475b">
        {currency} {roundOffNumber(currentValue)}
      </StatNumber>
      <StatHelpText color={color}>
        {percentageChange}
        <StatArrow type={changeDirection} />
      </StatHelpText>
    </Stat>
  );
};

Stats.propTypes = {
  currency: PropTypes.string,
  currentValue: PropTypes.number,
  change: PropTypes.number,
  percentageChange: PropTypes.string,
  size: PropTypes.string,
};

Stats.defaultProps = {
  currency: "$",
  currentValue: 0,
  change: 0,
  percentageChange: "",
  size: "md",
};

export default Stats;
