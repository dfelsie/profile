import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  setVisibility: (visibility: boolean) => void;
  visible: boolean;
};

export default function FramerChakraRotatingChevron({
  setVisibility,
  visible,
}: Props) {
  const rotVariants = {
    init: {
      rotate: 180,
    },
    after: {
      rotate: 0,
    },
  };

  return (
    <motion.div
      onClick={() => setVisibility(!visible)}
      variants={rotVariants}
      animate={visible ? "init" : "after"}
    >
      <ChevronDownIcon boxSize={"35px"} mt={"-5px"} />
    </motion.div>
  );
}
