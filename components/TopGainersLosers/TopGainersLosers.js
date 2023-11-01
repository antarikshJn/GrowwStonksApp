import { useGetTopGainersLosersQuery } from "@/features/services/topGainersLosersApi";
import React from "react";
import Loader from "../common/Loader";
import StockCards from "../StockCard/StockCard";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import StockReader from "@/readers/Stock.reader";
import Link from "next/link";

const TopGainersLosers = () => {
  const { isFetching, data } = useGetTopGainersLosersQuery();
  const { top_gainers, top_losers } = data || {};

  if (isFetching) {
    return <Loader />;
  }
  return (
    <Tabs align="center" isFitted={true}>
      <TabList>
        <Tab>Top Gainers</Tab>
        <Tab>Top Losers</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {top_gainers.map((stockInfo) => {
              return (
                <Link
                  href={`/product/${StockReader.ticker(stockInfo)}`}
                  key={StockReader.ticker(stockInfo)}
                >
                  <StockCards stockInfo={stockInfo} />
                </Link>
              );
            })}
          </SimpleGrid>
        </TabPanel>

        <TabPanel>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {top_losers.map((stockInfo) => {
              return (
                <Link
                  href={`/product/${StockReader.ticker(stockInfo)}`}
                  key={StockReader.ticker(stockInfo)}
                >
                  <StockCards
                    key={StockReader.ticker(stockInfo)}
                    stockInfo={stockInfo}
                  />
                </Link>
              );
            })}
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TopGainersLosers;
