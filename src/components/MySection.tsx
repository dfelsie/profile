import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { ArrowDownIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  isBlack?: boolean;
  children?: React.ReactNode;
};

export default function MySection({ isBlack, title, children }: Props) {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  return (
    <Box
      h={isLargerThan960 ? "850px" : "1050px"}
      bg={isBlack ? "black" : "white"}
      overflow="hidden"
    >
      <Center flexDir={"column"} h={"100%"}>
        <ArrowDownIcon
          boxSize={"350px"}
          color={!isBlack ? "black" : "white"}
          mt={"-65px"}
        />
        <Heading
          mt={"-50px"}
          mb={"20px"}
          fontSize={"8vw"}
          color={!isBlack ? "black" : "white"}
        >
          {title}
        </Heading>
        {children}
      </Center>
    </Box>
  );
}

MySection.defaultProps = {
  isBlack: false,
  title: "with-chakra-ui-typescript",
};
