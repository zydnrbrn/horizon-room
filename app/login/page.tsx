'use client'

import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    useBreakpointValue,
    IconProps,
    Icon,
    useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    )
}

export default function Login() {
    const [email, setEmail] = useState('zidanreborn@gmail.com');
    const [password, setPassword] = useState('password');
    const toast = useToast();
    const router = useRouter();

    const requestLogin = async (event: FormEvent) => {
        event.preventDefault();
        toast({
            title: "Processing",
            description: "Logging in...",
            position: "top-right",
            status: "info",
            duration: 5000,
            isClosable: true,
        });
        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const response = await axios.post('/api/auth/login', formData);
            toast({
                title: "Success",
                description: "Logged in successfully",
                position: "top-right",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            router.push('/rooms');
        } catch (e) {
            console.error(e);
            toast({
                title: "An error occurred",
                description: "Unable to log in",
                position: "top-right",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };
    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Welcome to{' '}
                        <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                            HORIZONROOM
                        </Text>{' '}
                        KEEP Steedy
                    </Heading>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Login for using HORIZONROOM
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            You can login to HORIZONROOM by using your email and password.
                        </Text>
                    </Stack>
                    <Box as={'form'} onSubmit={requestLogin}>
                        <Stack spacing={4}>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                        </Stack>
                        <Button
                            type='submit'
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.500,black)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}>
                            Login
                        </Button>
                    </Box>
                </Stack>
            </Container>
            <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
        </Box>
    )
}