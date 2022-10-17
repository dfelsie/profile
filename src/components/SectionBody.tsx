import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import ExpandingDetailCardWithDate from "./ExpandingDetailCardWithDate";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandingDetailCard from "./ExpandingDetailsCard";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

type Props = {
  sectionTitle: string;
  isBlack: boolean;
};

export default function SectionBody({ sectionTitle, isBlack }: Props) {
  let body;
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  switch (sectionTitle) {
    case "About":
      body = (
        <Flex>
          <Text display={"block"} w="60%" m="auto" fontSize={"26px"}>
            I'm a software engineer based in NYC. I'm passionate about building
            software that improves the lives of others. I recently graduated
            from Macalester College with a degree in Computer Science and
            Applied Mathematics. In my free time, I read, watch basketball, and
            work on side projects.
          </Text>
        </Flex>
      );
      break;
    case "Skills":
      body = (
        <Grid
          w={"100%"}
          templateColumns={"repeat(3,1fr)"}
          columnGap={isLargerThan960 ? "20px" : "10px"}
          h={"100%"}
          pb={"15px"}
          mt={"15px"}
        >
          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="React">
              <Text>
                I've been using React (and Next.js) to build professional UIs
                for two years now.
              </Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="TypeScript">
              <Text>
                I use TypeScript to write clean, readable, and maintainable
                code, in the frontend and the backend.
              </Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="C++">
              <Text>
                I use C++ to write fast, performant, and scalable code for QT
                apps.
              </Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="Node.js">
              <Text>I use Node.js to quickly build rest APIs.</Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="SQL">
              <Text>
                I use SQL (usually PostgreSQL) to create and manage databases.
              </Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="Flask">
              <Text>
                I've used Flask (and Redis for session storage) to build complex
                REST APIs.
              </Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="Flutter">
              <Text>
                I've recently started using Flutter to build cross platform apps
                in Dart.
              </Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="Docker">
              <Text>
                I've recently started using Docker maintain and deploy apps in
                the cloud with Kubernetes.
              </Text>
            </ExpandingDetailCard>
          </GridItem>

          <GridItem height={"fit-content"}>
            <ExpandingDetailCard title="Tensorflow">
              <Text>
                I have experience in Tensorflow and pandas for data analysis
                with machine learning.
              </Text>
            </ExpandingDetailCard>
          </GridItem>
        </Grid>
      );

      break;
    case "Experience":
      body = (
        <>
          <List h={"100%"}>
            <ListItem>
              <ExpandingDetailCardWithDate
                date={"2018-(Dec)2021"}
                title={"B.S. at Macalester College"}
              >
                <Text>
                  Graduated from Macalester College with a degree in Computer
                  Science and Applied Mathematics. My time there included
                  courses on parallel programming, data structures, software
                  engineering machine learning and statistics.
                </Text>
              </ExpandingDetailCardWithDate>
            </ListItem>
            <ListItem>
              <ExpandingDetailCardWithDate
                date={"06/2021-08/2021"}
                title={"Software Engineering Intern at Foursquare"}
              >
                <Text>
                  Worked as a software engineering intern at Foursquare, where I
                  worked on the frontend and backend of the Amundsen project to
                  allow for data discovery from SQL and apache hive DBs.
                </Text>
              </ExpandingDetailCardWithDate>
            </ListItem>
            <ListItem>
              <ExpandingDetailCardWithDate
                date={"09/2021-10/2021"}
                title={"Hackathon Supervisor at Code for America"}
              >
                <Text>
                  Coordinated multiple hackathon teams to create better systems
                  for 911 responses in America.
                </Text>
              </ExpandingDetailCardWithDate>
            </ListItem>
          </List>
        </>
      );
      break;

    case "Projects":
      body = (
        <>
          <Center>
            <List>
              <ListItem mb={"75px"}>
                <ExpandingDetailCard title="Quicksort Visualization">
                  <Text>
                    An animated visualization of the quicksort algorithm using
                    React, TypeScript, and Framer-Motion.
                    <br></br>
                    Vercel Live Link:{" "}
                    <a href="https://framer-algo-3yhl979xw-dfelsie.vercel.app/">
                      Here
                    </a>
                    <br></br>
                    Github Link:{" "}
                    <a href="https://github.com/dfelsie/framer-algo">Here</a>
                  </Text>
                </ExpandingDetailCard>
              </ListItem>
              <ListItem mb={"75px"}>
                <ExpandingDetailCard title="Profile">
                  <Text>
                    The profile you're currently viewing.
                    <br></br>
                    Github Link:{" "}
                    <a href="https://github.com/dfelsie/profile">Here</a>
                  </Text>
                </ExpandingDetailCard>
              </ListItem>
              <ListItem>
                <ExpandingDetailCard title="Marble Mockup">
                  <Text>
                    An attempt to clone a very well crafted website. Vercel Live
                    Link: <a href="https://marbleclone.vercel.app/">Here</a>
                  </Text>
                </ExpandingDetailCard>
              </ListItem>
            </List>
          </Center>
        </>
      );
      break;
    case "Contact":
      body = (
        <>
          <Center id="contact" flexDir={"column"}>
            <List>
              <ListItem>
                <Flex mb="25px" fontSize={isLargerThan960 ? "60px" : "42px"}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    height={"75px"}
                    style={{ marginRight: "45px" }}
                  />
                  <Text color={"white"}>
                    Linkedin:{" "}
                    <a
                      color="white"
                      href="https://www.linkedin.com/in/daniel-felsenthal-697797213"
                    >
                      Click here
                    </a>
                  </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex mb="25px" fontSize={isLargerThan960 ? "60px" : "42px"}>
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    height={"75px"}
                    style={{ marginRight: "45px" }}
                  />
                  <Text>Email: dfelsenthal88@gmail.com</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex mb="25px" fontSize={isLargerThan960 ? "60px" : "42px"}>
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    height={"75px"}
                    style={{ marginRight: "45px" }}
                  />
                  <Text color={"white"}>
                    Github:{" "}
                    <a color="white" href="https://github.com/dfelsie">
                      Click here
                    </a>
                  </Text>
                </Flex>
              </ListItem>
            </List>
          </Center>
        </>
      );
      break;
    default:
      break;
  }
  return (
    <Box
      w={isLargerThan960 ? "50%" : "90%"}
      textColor={!isBlack ? "black" : "white"}
      h={"100%"}
    >
      {" "}
      {body}
    </Box>
  );
}
