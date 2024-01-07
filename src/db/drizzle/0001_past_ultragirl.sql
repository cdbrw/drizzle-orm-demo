CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "authorId" uuid NOT NULL;