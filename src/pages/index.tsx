import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import MySection from "../components/MySection";
import SectionBody from "../components/SectionBody";
import TitleCard from "../components/TitleCard";

const sectionNames = ["About", "Skills", "Experience", "Contact"];

const Index = () => (
  <Flex flexDir={"column"} minH="100vh" pt={"15px"}>
    {/* <Navbar>
      <h1>I'm A header!</h1>
    </Navbar> */}
    <TitleCard />
    <Flex flexGrow={9} flexDir={"column"} color="text" h={"90%"} w={"100%"}>
      {sectionNames.map((name, index) => (
        <MySection isBlack={index % 2 == 0} title={name}>
          <SectionBody
            isBlack={index % 2 == 0}
            sectionTitle={name}
          ></SectionBody>
        </MySection>
      ))}
    </Flex>

    {/* <Footer>
      <h1>I'm A Footer!</h1>
    </Footer> 
     <CTA /> */}
  </Flex>
);

export default Index;
