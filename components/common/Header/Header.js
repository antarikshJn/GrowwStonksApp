import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

import AutoSuggest from "@/components/AutoSuggest";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      justifyContent="space-between"
      gap="2"
      className={styles.header}
    >
      <Box p="2">
        <Link href="/">
          <Heading size="lg" color="#00b386">
            GrowwStonks
          </Heading>
        </Link>
      </Box>
      <Spacer width="100%" />
      <div className={styles.headerMenu}>
        <Box gap="2">
          <Link href="/explore">
            <Text color="#00b386">Explore</Text>
          </Link>
        </Box>
        <Box gap="2">
          <AutoSuggest />
        </Box>
      </div>
    </Flex>
  );
};

export default Header;
