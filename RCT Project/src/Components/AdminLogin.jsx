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

import { useRef, useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const navigate = useNavigate();



    // const [old, setNew] = useState([])

    let VALUE = useContext(AppContext)

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    function CHECK() {
        let email = ref1.current.value
        let pass = ref2.current.value

        

        if(email == "Bharat@gmail.com" && pass == "Bharat@2486"){
            navigate('/userdata')


        } else{
            alert('Wrong credentials')
        }
    }


    if (VALUE.isLogin) {
        navigate("/home");
        // <Navigate to="/home" />
    }


    return (

        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            onMouseEnter={()=>{VALUE.setDoHover(false); VALUE.setDoHover1(false)}}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in as admin account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Login as user <Link color={'blue.400'}>Login</Link> ✌️
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
                            <Input type="email" ref={ref1} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" ref={ref2} />
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
                                }} onClick={CHECK}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

