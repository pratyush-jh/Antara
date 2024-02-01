import React from 'react'
import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    // navbar
    <>
      <Box
        className='large-screen'
        pos={"sticky"}
        top={"0"}
        bgColor={"#0B0B70"}
        color={"white"}
        display={["none", "none", "flex"]}
        justifyContent={"space-between"}
        p={"8px 40px"}
        zIndex={"10"}
      >
        <Text fontFamily={"Imprint MT Shadow"} fontSize={"60px"} textShadow={"2px 2px 10px white"}>
          Antara
        </Text>
        <HStack w={["0", "0", "60%", "40%"]} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Button
              variant={"ghost"}
              color={"white"}
              fontSize={"20px"}
              p={"0px 5px"}
              _hover={{color: "black", bgColor: "white"}}
            >
              Home
            </Button>
          </Link>
          <Link to={"/events"}>
            <Button
              variant={"ghost"}
              color={"white"}
              fontSize={"20px"}
              p={"0px 5px"}
              _hover={{color: "black", bgColor: "white"}}
            >
              Events
            </Button>
          </Link>
          <Link to={"/timeline"}>
            <Button
              variant={"ghost"}
              color={"white"}
              fontSize={"20px"}
              p={"0px 5px"}
              _hover={{color: "black", bgColor: "white"}}
            >
              Timeline
            </Button>
          </Link>
          <HashLink to={"/#faqs"}>
            <Button
              variant={"ghost"}
              color={"white"}
              fontSize={"20px"}
              p={"0px 5px"}
              _hover={{color: "black", bgColor: "white"}}
            >
              FAQS
            </Button>
          </HashLink>
          <Link to={"/contact"}>
            <Button
              variant={"ghost"}
              color={"white"}
              fontSize={"20px"}
              p={"0px 5px"}
              _hover={{color: "black", bgColor: "white"}}
            >
              Contact
            </Button>
          </Link>
        </HStack>
      </Box>
      <Box
      className='small-screen'
        pos={"sticky"}
        top={"0"}
        bgColor={"#0B0B70"}
        color={"white"}
        display={["flex", "flex", "none"]}
        justifyContent={"space-between"}
        p={"5px 20px"}
        alignItems={"center"}
        zIndex={"10"}
      >
        <Text fontFamily={"Imprint MT Shadow"} fontSize={"50px"} textShadow={"2px 2px 10px white"}>
          Antara
        </Text>
        <Button ref={btnRef} onClick={onOpen} variant={"ghost"} color={"white"}>
          <AiOutlineMenu size={"30"}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader textAlign={"center"}>
            <Text fontFamily={"Imprint MT Shadow"} fontSize={"50px"} textShadow={"2px 2px 10px red"}>
              Antara
            </Text>
            </DrawerHeader>
            <DrawerBody mt={"35%"}>
              <VStack fontSize={"22px"} fontWeight={"700"}>
                <Link to={"/"}>
                  <Button
                    variant={"ghost"}
                    fontSize={"20px"}
                    _hover={{color: "black", bgColor: "white"}}
                    onClick={onClose}
                  >
                    Home
                  </Button>
                </Link>
                <Link to={"/events"}>
                  <Button
                    variant={"ghost"}
                    fontSize={"20px"}
                    _hover={{color: "black", bgColor: "white"}}
                    onClick={onClose}
                  >
                    Events
                  </Button>
                </Link>
                <Link to={"/timeline"}>
                  <Button
                    variant={"ghost"}
                    fontSize={"20px"}
                    _hover={{color: "black", bgColor: "white"}}
                    onClick={onClose}
                  >
                    Timeline
                  </Button>
                </Link>
                <HashLink to={"/#faqs"}>
                  <Button
                    variant={"ghost"}
                    fontSize={"20px"}
                    _hover={{color: "black", bgColor: "white"}}
                    onClick={onClose}
                  >
                    FAQS
                  </Button>
                </HashLink>
                <Link to={"/contact"}>
                  <Button
                    variant={"ghost"}
                    fontSize={"20px"}
                    _hover={{color: "black", bgColor: "white"}}
                    onClick={onClose}
                  >
                    Contact
                  </Button>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}

export default Header