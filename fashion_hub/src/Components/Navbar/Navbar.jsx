import React from 'react'
import { Flex, Container, Center, Box, Menu,MenuItem,} from "@chakra-ui/react";
import insta from "./images/640px-Instagram_icon.png";
import "./Navbar.css";
import logo from "./images/fashionHub.png"
import { useDisclosure } from "@chakra-ui/react";
import {
    useColorModeValue,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Mens_Image from "./images/Mens_image.webp";
import womens_Image from "./images/womens_image.webp";



const Navbar = () => {
    const { isOpen:menu1, onOpen:menu1Open, onClose:menu1Close } = useDisclosure()
    const { isOpen, onOpen, onClose} = useDisclosure()
  return (
    <div className='mainNavbar'>
        <div className="UpperNavbar">
            <Flex justify={'space-between'} paddingRight={8}  paddingLeft={8} padding={1} fontWeight={600}>
                <Container>
                    <Flex alignItems={'center'} gap={3} >
                        <img src={insta} width={24} alt="Insta_image" />
                        <p>1.5 Million</p>
                    </Flex>
                </Container>
                <Container>
                    <p style={{fontWeight:"500"}}>A hub to fulfil your fashion Needs | <span className='TopText'>MODERN X FASHION</span></p>
                </Container>
                <Container textAlign={'right'}>
                    <p>English</p>
                </Container>
            </Flex>
        </div>
        <div className='LowerNavbar'>
            <Flex>
                <Container >
                    <Flex className='LowerNavCont'>
                        <Menu isOpen={menu1} >
                            <MenuButton
                                variant="ghost"
                                mx={1}
                                py={[1, 2, 2]}
                                px={4}
                                borderRadius={5}
                                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                onMouseEnter={menu1Open}
                                onMouseLeave={menu1Close}
                            >
                                Mens {menu1Open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton>
                            <MenuList onMouseEnter={menu1Open} onMouseLeave={menu1Close}>
                                <Box style={{width:"70vw", height:"70vh"}}>
                                    <Flex>
                                        <Box style={{ width:"70%"}}>
                                            <Flex justify={"space-between"} style={{padding:"10px"}}>
                                                <Box style={{fontSize:"12px", fontWeight:"800"}}>
                                                    <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Clothing</MenuItem>
                                                    <MenuItem>New In</MenuItem>
                                                    <MenuItem>View All</MenuItem>
                                                    <MenuItem>T-Shirts</MenuItem>
                                                    <MenuItem>Jackets & Coats</MenuItem>
                                                    <MenuItem>Hoodies & Sweatshirts</MenuItem>
                                                    <MenuItem>Sweatpants</MenuItem>
                                                    <MenuItem>Shorts</MenuItem>
                                                    <MenuItem>Co-ords sets</MenuItem>
                                                </Box>
                                                <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                    <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Brand</MenuItem>
                                                    <MenuItem>Essentials by Fashion Hub</MenuItem>
                                                    <MenuItem>Nike</MenuItem>
                                                    <MenuItem>TigerBear</MenuItem>
                                                    <MenuItem>Bravesoul</MenuItem>
                                                    <MenuItem>Adidas</MenuItem>
                                                </Box>
                                                <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                    <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Fashion Hub Speacials</MenuItem>
                                                    <MenuItem>Manish Malhotra</MenuItem>
                                                    <MenuItem>Sabyasachchi</MenuItem>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box style={{textAlign:"center"}}>
                                            <img src={Mens_Image} className="imageMens"  alt="" />
                                        </Box>
                                    </Flex>
                                </Box>
                            </MenuList>
                        </Menu>
                        <Menu isOpen={isOpen} >
                            <MenuButton
                                variant="Ghost"
                                mx={1}
                                py={[1, 2, 2]}
                                px={4}
                                borderRadius={5}
                                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                onMouseEnter={onOpen}
                                onMouseLeave={onClose}
                            >
                                Womens {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton>
                            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                                <Box style={{width:"70vw", height:"70vh"}}>
                                    <Flex>
                                        <Box style={{ width:"70%"}}>
                                            <Flex justify={"space-between"} style={{padding:"10px"}}>
                                                <Box style={{fontSize:"12px", fontWeight:"800"}}>
                                                    <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Clothing</MenuItem>
                                                    <MenuItem>New In</MenuItem>
                                                    <MenuItem>View All</MenuItem>
                                                    <MenuItem>Lounge & Sleepware</MenuItem>
                                                    <MenuItem>Lingerie & innerwear</MenuItem>
                                                    <MenuItem>Sweatshirts</MenuItem>
                                                    <MenuItem>Sports bra</MenuItem>
                                                    <MenuItem>Bodysuits</MenuItem>
                                                    <MenuItem>Outerwear</MenuItem>
                                                    <MenuItem>Jeans</MenuItem>
                                                    <MenuItem>Shorts</MenuItem>
                                                    <MenuItem>T-Shirts</MenuItem>
                                                    <MenuItem>Lagging</MenuItem>
                                                    <MenuItem>Pants</MenuItem>
                                                </Box>
                                                <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                    <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Brand</MenuItem>
                                                    <MenuItem>Essentials by Fashion Hub</MenuItem>
                                                    <MenuItem>Nike</MenuItem>
                                                    <MenuItem>TigerBear</MenuItem>
                                                    <MenuItem>Bravesoul</MenuItem>
                                                    <MenuItem>Adidas</MenuItem>
                                                </Box>
                                                <Box style={{fontSize:"12px", fontWeight:"600"}}>
                                                    <MenuItem style={{fontSize:"18px", fontWeight:"600"}}>Shoes</MenuItem>
                                                    <MenuItem>New In</MenuItem>
                                                    <MenuItem>View All</MenuItem>
                                                    <MenuItem>Sneakers</MenuItem>
                                                    <MenuItem>Heels</MenuItem>
                                                    <MenuItem>Sliders & flip flops</MenuItem>
                                                    <MenuItem>Boots</MenuItem>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box style={{textAlign:"center"}}>
                                            <img src={womens_Image} className="imageMens"  alt="" />
                                        </Box>
                                    </Flex>
                                </Box>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Container>
                <Container >
                    <div style={{textAlign:"center",marginLeft:"36%"}}><img src={logo} width={150}  mb={10} alt="Site_logo" /></div>
                </Container>
                <Container style={{border:"1px green solid"}}>
                    <p>Kartikey</p>
                </Container>
            </Flex>
        </div>
    </div>
  )
}

export default Navbar