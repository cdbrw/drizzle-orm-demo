CREATE TABLE IF NOT EXISTS "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"content" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
