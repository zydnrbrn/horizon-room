'use client'
import React from 'react'
import SplitWithImage from '../components/features/features'
import CaptionCarousel from '../components/carousels/carousels'
import ListRooms, { Room } from '../components/rooms/rooms';

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
            {/* <CaptionCarousel /> */}
            <SplitWithImage />
            {rooms && <ListRooms rooms={rooms.data} />}
        </div>
    )
}

export default Page