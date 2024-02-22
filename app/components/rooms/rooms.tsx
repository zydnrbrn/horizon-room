'use client'

import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
    Flex,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useToast,
} from '@chakra-ui/react'
import { useState } from 'react';
import { DatePicker, DatePickerInput } from '@carbon/react'
import axios from 'axios';

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

type ModalBookingProps = {
    roomName: string;
};


const ListRooms = ({ rooms }: ListRoomsProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const toast = useToast();
    const onChange = (dates: Date[]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('roomId', String(selectedRoom?.id));
            formData.append('startTime', startDate);
            formData.append('endTime', endDate);

            const response = await axios.post('/api/rooms/bookings', formData);

            if (response.status === 201) {
                toast({
                    title: 'Room booked successfully.',
                    description: 'You have successfully booked the room.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
                onClose();
            }

            toast({
                title: 'An error occurred.',
                description: 'Unable to book the room.',
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'An error occurred.',
                description: 'Unable to book the room.',
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    }

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
                            }}
                            onClick={() => {
                                setSelectedRoom(room);
                                onOpen();
                            }}>
                            Book Now
                        </Button>
                    </Stack>
                ))}
            </SimpleGrid>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Booking {selectedRoom?.roomName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form action="">
                            <Text>Room Name: {selectedRoom?.roomName}</Text>
                            <Text>Cost per hour: {selectedRoom?.costPerHour}</Text>
                            <DatePicker datePickerType='range'>
                                <DatePickerInput id="date-picker-input-id-start" placeholder="mm/dd/yyyy" labelText="Start date" size="md" />
                                <DatePickerInput id="date-picker-input-id-finish" placeholder="mm/dd/yyyy" labelText="End date" size="md" />
                            </DatePicker>
                            <Button type="submit" colorScheme="blue" mt={4}>Save</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default ListRooms;