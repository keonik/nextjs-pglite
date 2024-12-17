import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const chatTable = pgTable("chat", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    summary:    varchar({ length: 255 }),
})


// export const chatMessagesTable = pgTable("chat_messages", {
//   chat_id: integer().references(chatTable).notNull(),
//   message_id: integer().references(messagesTable).notNull(),
//   primary: ["chat_id", "message_id"],
// });