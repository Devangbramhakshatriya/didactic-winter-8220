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
  Link
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from "./images/fashionHub.png";
import "./Navbar.css";
import SignIn from '../Login/SignIn';

const links = [
  { name: 'Mens', href: '/mens' },
  { name: 'Womens', href: '/womens' },
  { name: 'Shoes', href: '/shoes' },
];

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuLinks, setMenuLinks] = useState(links);

  const toggleMenu = () => {
    isOpen ? onClose() : onOpen();
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
