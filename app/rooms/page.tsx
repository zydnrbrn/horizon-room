'use client'
import React from 'react';
import SplitWithImage from '../components/features/features';
import ListRooms, { Room } from '../components/rooms/rooms';
import { Skeleton } from '@chakra-ui/react';

type RoomsResponse = {
    success: boolean;
    data: Room[];
    totalData: number;
}

function Page() {
    const [rooms, setRooms] = React.useState<RoomsResponse | null>(null);

    React.useEffect(() => {
        const getRoomList = async () => {
            try {
                const response = await fetch('/api/rooms');
                const data: RoomsResponse = await response.json();
                setRooms(data);
            } catch (error) {
                console.error(error);
            }
        };

        getRoomList();
    }, []);

    return (
        <div>
            <SplitWithImage />
            {rooms ? <ListRooms rooms={rooms.data} /> : <Skeleton borderRadius={10} height="800px" />}
        </div>
    )
}

export default Page