import { auth } from "@clerk/nextjs/server";

// @ts-ignore
const { userId, sessionClaims } = await auth();

export const role = (sessionClaims?.metadata as { role?: string })?.role;
export const currentUserId = userId;
