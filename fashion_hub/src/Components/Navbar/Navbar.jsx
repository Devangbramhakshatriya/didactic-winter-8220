import React from 'react'
import { Flex, Container, Center, Box} from "@chakra-ui/react";
import insta from "./images/640px-Instagram_icon.png";
import "./Navbar.css";
import logo from "./images/Fashion_hub.jpeg"


const Navbar = () => {
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
        <div>
            <Flex>
                <Container>
                    <img src={logo} alt="Site_logo" />
                </Container>
            </Flex>
        </div>
    </div>
  )
}

export default Navbar