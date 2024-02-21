import { Users } from "@/lib/servers/models/users";
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const emailReq = formData.get('email');
        const nameReq = formData.get('name');
        const passwordReq = formData.get('password');

        switch (true) {
            case (!emailReq || !nameReq || !passwordReq):
                return Response.json({
                    status: 'error',
                    message: 'Name, email, and password are required',
                });
        }

        const hashedPassword = await bcrypt.hash(passwordReq.toString(), 10); // 10 is the saltRounds

        const createUser = async () => {
            const create = Users.create({
                name: nameReq,
                email: emailReq,
                password: hashedPassword
            });

            return create;
        }
        const user = await createUser();
        if (user) {
            return Response.json({
                status: 'success',
                message: 'User created successfully',
            }, { status: 200 });
        }

        return Response.json({
            status: 'failed',
            message: 'User not created',
        }, { status: 500 });
    } catch (error) {
        return Response.json({
            status: 'error',
            message: error,
        }, { status: 500 });
    }
}