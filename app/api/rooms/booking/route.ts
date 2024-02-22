import { RoomUsages } from "@/lib/servers/models/roomUsages";
import { Rooms } from "@/lib/servers/models/rooms";
import { Users } from "@/lib/servers/models/users";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const clientId = formData.get('clientId');
        const roomId = formData.get('roomId');
        const startTime = formData.get('startTime');
        const endTime = formData.get('endTime');
        const bookingDate = formData.get('bookingDate');

        const checkClient = await Users.findOne({ where: { id: clientId } });
        const checkRooms = await Rooms.findOne({ where: { id: roomId } });
        if (!checkClient || !checkRooms) {
            return Response.json({ success: false, message: 'Client or room not found' }, { status: 404 });
        }
        const roomCost = checkRooms?.get('costPerHour');
        const calculatedQuota = checkClient ? checkClient.credits - (roomCost || 0) : 0;
        if (checkClient) {
            // Updating users credit, i directly call the update method from the model
            if (!await Users.update({ credits: calculatedQuota }, { where: { id: clientId } })) {
                return Response.json({ success: false, message: 'Failed to booking rooms, not enough credit' }, { status: 400 });
            }
        }

        // Add booking room request from client/users
        const booking = await RoomUsages.create({
            clientId: clientId,
            roomId: roomId,
            startTime: startTime,
            endTime: endTime,
            bookingDate: bookingDate,
            quotaUsed: roomCost
        });

        return Response.json({ success: true, data: booking }, { status: 201 });
    } catch (error) {
        return Response.json({ error: error }, { status: 500 });
    }
}