import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function TitleCard({}: Props) {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  return (
    <Box
      h={"250px"}
      flexGrow={1}
      border={"2px solid black"}
      borderRadius={"50px"}
      px={isLargerThan960 ? "5%" : "5px"}
      mb={"15px"}
    >
      <Center height={"50%"} mt="75px" justifyContent={"space-between"}>
        <Image
          src="/headshot.jpg"
          height="180px"
          width="150px"
          style={{ borderRadius: "75px" }}
          alt="Attractive Headshot of Daniel Felsenthal"
        ></Image>
        <Flex flexDir={"column"} ml={"15px"}>
          <div>
            <Heading>Daniel Felsenthal</Heading>
            <Heading>Full Stack Developer</Heading>
          </div>
        </Flex>
        <Heading>
          <a href="#contact"> Contact Info </a>
        </Heading>
      </Center>
    </Box>
  );
}
