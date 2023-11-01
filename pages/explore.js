import React from "react";

import TopGainersLosers from "@/components/TopGainersLosers";
import { Box } from "@chakra-ui/react";

const ExplorePage = () => {
  return (
    <Box flex={1} maxWidth={1110} width="100%" margin="0 auto" pt={4} pb={4}>
      <TopGainersLosers />
    </Box>
  );
};

export default ExplorePage;
