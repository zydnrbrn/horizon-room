import { RoomUsages } from "@/lib/servers/models/roomUsages";
import { Users } from "@/lib/servers/models/users";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const clientId = formData.get('clientId');
        const roomId = formData.get('roomId');
        const startTime = formData.get('startTime');
        const endTime = formData.get('endTime');
        const bookingDate = formData.get('bookingDate');
        const quotaUsed = Number(formData.get('quotaUsed'));

        const checkClient = await Users.findOne({ where: { id: clientId } });
        const calculatedQuota = checkClient ? checkClient.credits - (quotaUsed || 0) : 0;
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
            quotaUsed: quotaUsed
        });

        return Response.json({ success: true, data: booking }, { status: 201 });
    } catch (error) {
        return Response.json({ error: error }, { status: 500 });
    }
}