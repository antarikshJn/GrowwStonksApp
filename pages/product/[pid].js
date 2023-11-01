import React from "react";
import { useRouter } from "next/router";

import Loader from "@/components/common/Loader";
import TimeSeriesChart from "@/components/TimeSeriesChart";
import ProductHeader from "@/components/ProductHeader";
import ProductInfo from "@/components/ProductInfo";

import {
  useGetCompanyOverviewQuery,
  useGetQuoteBySombolQuery,
} from "@/features/services/companyOverviewApi";
import CompanyOverviewReader from "@/readers/CompanyOverview.reader";
import { Box } from "@chakra-ui/react";

const Product = () => {
  const router = useRouter();
  const { isFetching, data } = useGetCompanyOverviewQuery("IBM"); // router.query.pid
  const { isFetching: isFetchingQuote, data: quote } =
    useGetQuoteBySombolQuery("IBM");

  if (isFetching || isFetchingQuote) {
    return <Loader />;
  }
  return (
    <Box flex={1} maxWidth={1110} margin="0 auto">
      <ProductHeader
        name={CompanyOverviewReader.Name(data)}
        assetType={CompanyOverviewReader.AssetType(data)}
        ticker={router.query.pid}
        exchange={CompanyOverviewReader.Exchange(data)}
        quote={quote}
      />
      <TimeSeriesChart />
      <ProductInfo productDetails={data} />
    </Box>
  );
};

export default Product;
