import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";
import FramerChakraRotatingChevron from "./FramerChakraRotatingChevron";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function ExpandingDetailCard({
  title,
  description,
  children,
}: Props) {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  const [visible, setVisible] = useState(false);
  const variants: Variants = {
    visible: {
      height: isLargerThan960 ? "100px" : "200px",
      opacity: 1,
    },
    hidden: {
      height: "0",
      opacity: [0, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.5],
      },
    },
  };

  return (
    <Flex
      flexDir={"column"}
      border="3px solid black"
      borderRadius={"20px"}
      pl={"5%"}
      onClick={() => setVisible(!visible)}
    >
      <Flex justifyContent={"space-between"}>
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
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
}
