import React from "react";
import PropTypes from "prop-types";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { STATS_KEYS_TO_PICK, STATS_KEYS_VS_LABEL } from "./StatCards.helper";
import CompanyOverviewReader from "@/readers/CompanyOverview.reader";

const StatCards = ({ companyInfo }) => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
    >
      {STATS_KEYS_TO_PICK.map((statskey) => {
        const handler = CompanyOverviewReader[statskey];
        return (
          <Card align="center" key={statskey}>
            <CardHeader pb="2">
              <Heading size="xs" color="#44475b">
                {STATS_KEYS_VS_LABEL[statskey]}
              </Heading>
            </CardHeader>
            <CardFooter pt="2">
              <Text size="xs" color="#44475b">
                {handler(companyInfo)}
              </Text>
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

StatCards.propTypes = {
  companyInfo: PropTypes.object,
};

StatCards.defaultProps = {
  companyInfo: {},
};

export default StatCards;
