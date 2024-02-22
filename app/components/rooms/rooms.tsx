'use client'

import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Flex,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'

export type Room = {
    id: string;
    roomName: string;
    costPerHour: number;
    createdAt: string;
    updatedAt: string;
};

type ListRoomsProps = {
    rooms: Room[];
};

const ListRooms = ({ rooms }: ListRoomsProps) => {
    return (
        <Container maxW={'7xl'}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
                {rooms.map((room) => (
                    <Stack spacing={{ base: 6, md: 10 }} key={room.id}>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'product image'}
                                src={`https://source.unsplash.com/random/?meeting,room`}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={{ base: '100%', sm: '400px', lg: '500px' }}
                            />
                        </Flex>
                        <Box as={'header'}>
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {room.roomName}
                            </Heading>
                            <Text color={{ base: 'gray.900', md: 'gray.400' }} fontWeight={300} fontSize={'2xl'}>
                                $ {room.costPerHour} per hour
                            </Text>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={<StackDivider borderColor={{ base: 'gray.200', md: 'gray.600' }} />}
                        >
                            <Box>
                                <Text fontSize={{ base: '16px', lg: '18px' }} color={{ base: 'yellow.500', md: 'yellow.300' }}
                                    fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
                                    Room Features
                                </Text>

                                <List spacing={2}>
                                    <ListItem>Feature 1</ListItem>
                                    <ListItem>Feature 2</ListItem>
                                    <ListItem>Feature 3</ListItem>
                                </List>
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={{ base: 'gray.900', md: 'gray.50' }}
                            color={{ base: 'gray.100', md: 'gray.900' }}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Book Now
                        </Button>
                    </Stack>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default ListRooms;