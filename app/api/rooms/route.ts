import { Rooms } from "@/lib/servers/models/rooms";

export async function GET(request: Request) {
    try {
        const allRooms = await Rooms.findAll();
        const filteredRooms = allRooms.filter((room) => room.get('roomName') !== 'Room 1');

        return Response.json({
            success: true,
            data: filteredRooms,
            totalData: filteredRooms.length
        });
    } catch (error) {
        return Response.json({
            success: false,
            data: error
        });
    }
}