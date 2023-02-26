import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
  
  export default function Login() {
    return (
      
      <>
        <Navbar/>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>

    );
  }


//   logic
// const signupForm = document.getElementById('signupForm');

// signupForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const username = document.getElementById('username').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value.trim();

//   if (!username || !email || !password) {
//     alert('Please fill out all the required fields.');
//     return;
//   }

//   const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//   if (existingUsers.find((user) => user.email === email)) {
//     alert('An account with that email already exists.');
//     return;
//   }

//   const newUser = { username, email, password };
//   existingUsers.push(newUser);

//   localStorage.setItem('users', JSON.stringify(existingUsers));

//   alert('Your account has been created successfully!');
//   window.location.href = '/login.html';
// });