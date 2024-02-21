import { Sessions } from "../models/sessions";

export async function startSession(user_id: string) {
    try {
        const session = await Sessions.create({
            userId: user_id,
            token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            startedAt: new Date(),
            endedAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });

        return session;
    } catch (error) {
        return error;
    }
}

export async function endSession(token: string) {
    try {
        const session = await Sessions.findOne({ where: { token } });

        if (session) {
            await session.destroy();

            return true;
        }

        return false;
    } catch (error) {
        return false;
    }
}

export async function getSession(token: string) {
    try {
        const session = await Sessions.findOne({ where: { token } });

        if (session) {
            return session;
        }

        return false;
    } catch (error) {
        return false;
    }
}