import { Image } from '@chakra-ui/image'
import React from 'react'
import img1 from '../assets/bgimage.jpg'
import { Box, HStack, Heading, Text } from '@chakra-ui/layout'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react'
import { AiFillAliwangwang, AiFillContacts, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <Image src={img1} w={"100%"} h={"600px"}></Image>
      <Box
      pos={"absolute"}
        w={"40%"}
        h={"300px"}
        bgColor={"rgba(255,255,255,0.3)"}
        textAlign={"center"}
        mt={"-450px"}
        ml={"30%"}
        zIndex={"2"}
        fontSize={"45px"}
        fontWeight={"700"}
        color={"white"}
        p={"3"}
      >
        <Text>T H E</Text>
        <Text>A N N U A L</Text>
        <Text>C U L T U R A L</Text>
        <Text>F E S T</Text>
      </Box>
      <Box
      w={"100%"}
      bg={"linear-gradient(90deg,rgb(0,0,20),rgb(100,0,0))"}
      p={"80px 0px"}
      >
        <Box w={"90%"} m={"auto"} p={"10"} bg={"linear-gradient(90deg,rgb(100,0,0),rgb(0,0,20))"} border={"2px solid white"} borderRadius={"10px"}>
          <Text color={"white"} fontSize={"16px"} fontFamily={"cursive"}>Antara: The Annual Cultural Fest of P.G.D.A.V. College, University of Delhi" is one of the most eagerly awaited cultural events in the college's calendar. The two-day-long fest takes place every year and is a celebration of the rich cultural heritage and diversity of the students. The event is organised by the students themselves, with the guidance of the college faculty. Antara offers a platform for students to showcase their talents in fields such as music, dance, drama, literature, and fine arts. The fest is a perfect blend of traditional and contemporary elements, which reflect the unique cultural identities of the students. The festival opens with a grand procession, which is followed by a series of competitions and performances, including solo and group performances in various categories. The cultural fest also features exhibitions, food stalls, and games, which add to the overall experience of the students. The event provides an opportunity for students to connect with each other and build new relationships, fostering a sense of community and belonging. In conclusion, Antara is not just a cultural festival but a celebration of the spirit of youth and the rich cultural diversity of P.G.D.A.V. College. It is a much-anticipated event that brings together students from different backgrounds to participate in a common celebration of arts and culture.</Text>
        </Box>
        <Heading textAlign={"center"} mt={"80px"} mb={"40px"} fontSize={"50px"} color={"white"}>FAQS</Heading>
        <Box id='faqs' w={"90%"} m={"auto"} p={"10"} bgColor={"white"} borderRadius={"10px"}>
          <Accordion allowToggle>
            <AccordionItem bgColor={"pink"} borderRadius={"5px"} border={"2px solid red"} m={"10px 0"}>
              <h2>
                <AccordionButton _hover={"none"}>
                  <Box as="span" flex='1' textAlign='left' fontSize={"20px"} fontWeight={"600"}>
                    What is Antara?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={"4"} >
                Antara, formerly known as (Aaghaz), is the Annual Cultural Fest of PGDAV College, University of Delhi.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bgColor={"skyblue"} borderRadius={"5px"} border={"2px solid blue"} m={"10px 0"}>
              <h2>
                <AccordionButton _hover={"none"}>
                  <Box as="span" flex='1' textAlign='left' fontSize={"20px"} fontWeight={"600"}>
                    Where can i get link to participate online?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={"4"}>
                Browse to the events of your choice in the Event Section.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bgColor={"yellowgreen"} borderRadius={"5px"} border={"2px solid green"} m={"10px 0"}>
              <h2>
                <AccordionButton _hover={"none"}>
                  <Box as="span" flex='1' textAlign='left' fontSize={"20px"} fontWeight={"600"}>
                    Is there any registration fee for participation?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={"4"}>
                No!
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bgColor={"orange"} borderRadius={"5px"} border={"2px solid darkblue"} m={"10px 0"}>
              <h2>
                <AccordionButton _hover={"none"}>
                  <Box as="span" flex='1' textAlign='left' fontSize={"20px"} fontWeight={"600"}>
                    How will I receive my Certificate(s) and Prizes (if any)?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={"4"}>
                The respective winners will be asked for their account details for transferring the amount to ensure feasibility.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box w={"60%"} h={"300px"} bgColor={"rgb(100,0,205)"} mt={"100px"} borderRadius={"0 200px 200px 0"} alignItems={"center"} textAlign={"center"}>
          <Heading color={"white"} p={"20px"} fontSize={"50px"}>Support Us</Heading>
          <HStack width={"70%"} m={"auto"} justifyContent={"space-between"}>
            <a href="/">
              <Button _hover={{filter: "invert(1)"}} w={"100px"} h={"100px"} borderRadius={"full"} color={"white"} bgColor={"black"}>
                <Text textAlign={"center"}><AiFillFacebook size={"50"}/></Text>
              </Button>
              <Text fontSize={"30px"} color={"white"}>Facebook</Text>
            </a>
            <a href="/">
              <Button _hover={{filter: "invert(1)"}} w={"100px"} h={"100px"} borderRadius={"full"} color={"white"} bgColor={"black"}>
                <Text textAlign={"center"}><AiFillInstagram size={"50"}/></Text>
              </Button>
              <Text fontSize={"30px"} color={"white"}>Instagram</Text>
            </a>
            <a href="/">
              <Button _hover={{filter: "invert(1)"}} w={"100px"} h={"100px"} borderRadius={"full"} color={"white"} bgColor={"black"}>
                <Text textAlign={"center"}><AiFillContacts size={"50"}/></Text>
              </Button>
              <Text fontSize={"25px"} color={"white"}>Hyperion-PGDAV</Text>
            </a>
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default Home