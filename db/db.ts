// db.ts

import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { chatTable } from "./schema/chat";
import { migrate } from "./migrate";

const client = new PGlite("idb://nextjs-pglite");

const db = drizzle(client);

try{
    db.select().from(chatTable);
}catch(e) {
    console.log("Error", e, "Migrating database");
    migrate();
}

export { db };