import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import FramerChakraRotatingChevron from "./FramerChakraRotatingChevron";

type Props = {
  title: string;
  date: string;
  description?: string;
  children?: React.ReactNode;
};

export default function ExpandingDetailCardWithDate({
  title,
  date,
  description,
  children,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  const variants = {
    visible: {
      height: isLargerThan960 ? "100px" : "175px",
      opacity: 1,
    },
    hidden: {
      height: "0",
      opacity: 0,
    },
  };

  return (
    <Flex
      flexDir={"column"}
      border="3px solid white"
      my={"25px"}
      borderRadius={"20px"}
      onClick={() => setVisible(!visible)}
    >
      <Flex justifyContent={"space-between"}>
        <Text ml={"4px"}>{date}:</Text>
        <Text>{title}</Text>
        <FramerChakraRotatingChevron
          visible={visible}
          setVisibility={setVisible}
        />
      </Flex>
      <AnimatePresence>
        <motion.div
          variants={variants}
          animate={visible ? "visible" : "hidden"}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingTop: "5px",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
}
