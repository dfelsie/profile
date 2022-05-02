import { Flex, FlexProps } from "@chakra-ui/react";

export const Navbar = (props: FlexProps) => (
  <Flex as="nav" position="fixed" top={0} width="full" {...props} />
);
