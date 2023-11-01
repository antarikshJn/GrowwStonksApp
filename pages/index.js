import React from "react";
import Link from "next/link";
import { Button, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Heading size="2xl" mb="2" color="#00b386">
        GrowwStonks
      </Heading>
      <Heading size="lg" mb="4" color="#696c7c">
        Your Partner in your financial growth
      </Heading>
      <Link href="/explore">
        <Button
          backgroundColor="#00b386"
          color="#ffffff"
          size="lg"
          _hover={{ bg: "#66e3c4" }}
        >
          Explore
        </Button>
      </Link>
    </Flex>
  );
}
