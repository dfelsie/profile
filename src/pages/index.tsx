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
import Head from "next/head";

const sectionNames = ["About", "Skills", "Experience", "Projects", "Contact"];

const Index = () => (
  <>
    <Head>
      <title>Profile for Daniel Felsenthal</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Flex flexDir={"column"} minH="100vh" pt={"15px"}>
      <TitleCard />
      <Flex flexGrow={9} flexDir={"column"} color="text" h={"90%"} w={"100%"}>
        {sectionNames.map((name, index) => (
          <MySection
            isBlack={index % 2 == 0}
            title={name}
            key={`mySectionnumber${index}`}
          >
            <SectionBody
              isBlack={index % 2 == 0}
              sectionTitle={name}
            ></SectionBody>
          </MySection>
        ))}
      </Flex>
    </Flex>
  </>
);

export default Index;
