import { db } from "@/db/db"
import { chatTable } from "@/db/schema/chat";

export const getChats = async () => {
    return await db.select().from(chatTable);   
}