import { Users } from "@/lib/servers/models/users";
import { startSession } from "@/lib/servers/utilites/session";
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const emailReq = formData.get('email');
        const passwordReq = formData.get('password');

        // Find the user with the provided email
        const user = await Users.findOne({ where: { email: emailReq } });

        if (!user) {
            return Response.json({
                success: false,
                message: 'User not found',
            }, { status: 404 });
        }

        // Compare the provided password with the stored password
        const passwordReqString = passwordReq as string;
        const isPasswordValid = await bcrypt.compare(passwordReqString, user.password);

        if (!isPasswordValid) {
            return Response.json({
                success: false,
                message: 'Invalid password',
            }, { status: 401 });
        }

        const session = await startSession(user.id);

        return Response.json({
            success: true,
            data: session
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({
            success: false,
            data: null
        }, { status: 500 });
    }
}