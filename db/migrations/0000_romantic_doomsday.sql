CREATE TABLE IF NOT EXISTS "chat" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "chat_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"summary" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "messages_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"message" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
