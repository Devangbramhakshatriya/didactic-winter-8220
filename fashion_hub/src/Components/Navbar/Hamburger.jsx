import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Container,
  Image,
  Link,
  Button
} from '@chakra-ui/react';
import {
  FaUserCircle,
  FaUser,
  FaTruckMoving,
  FaUserPlus,
  FaRegUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from "./images/fashionHub.png";
import "./Navbar.css";
import SignIn from '../Login/SignIn';
import { useNavigate } from "react-router-dom";


const links = [
  { name: 'Mens', href: '/mens' },
  { name: 'Womens', href: '/womens' },
  { name: 'Shoes', href: '/shoes' },
];

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuLinks, setMenuLinks] = useState(links);
  const navigateTo = useNavigate();
  const toggleMenu = () => {
    isOpen ? onClose() : onOpen();
  };
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };

  return (
    <>
        
        <Flex justify={'space-between'} bgColor="#e5e5df">
            <IconButton
                aria-label="Open Menu"
                size="lg"
                icon={<HamburgerIcon />}
                onClick={toggleMenu}
                display={{ base: 'block', md: 'none' }}
            />
        
            <Image display={{ base: 'block', md: 'none' }} width="26%" Src={Logo} alt="Logo"></Image>
        
            <Box width="20vw" border="1px solid red">
                <Button
                  display={{ base: "flex", md: "inline-flex" }}
                  color={"black"}
                  fontWeight={{ lg: "bold", md: "bold" }}
                  variant={"link"}
                  onClick={() => GoTo("/SignIn")}
                  gap={2}
                  fontSize={{ xl: "25px", lg: "16px", md: "13px", base: "20px" }} 
                  >
                  <FaUserCircle color="black" />
              
                </Button>
            </Box>
        </Flex>         
           
      <Box
        bg="white"
        px={2}
        py={4}
        pos="fixed"
        top={0}
        left={0}
        w="60%"
        h="60vh"
        zIndex={20}
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
      >
        <Flex justify="space-between" align="center" mb={8} >
          <Box>
            <Text fontSize="2xl" fontWeight="bold">Menu</Text>
          </Box>
          <IconButton
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={onClose}
          />
        </Flex>

        <Stack spacing={3}>
          {menuLinks.map((link) => (
            <Text
              key={link.name}
              fontWeight="bold"
              color="gray.600"
              fontSize="xl"
              onClick={onClose}
              href={link.href}
            >
              {link.name}
            </Text>
          ))}
        </Stack>

        <Flex justify="center" mt={10}>
          <Box mr={4}>
            <Text color="gray.400" fontSize="xl">
              About Us
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontSize="xl">
              Contact Us
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default HamburgerMenu;
