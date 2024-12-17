import { integer, pgTable, varchar,timestamp } from "drizzle-orm/pg-core";

export const messagesTable = pgTable("messages", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    message: varchar({ length: 255 }).notNull(),
    created_at: timestamp().notNull().defaultNow(),
  });