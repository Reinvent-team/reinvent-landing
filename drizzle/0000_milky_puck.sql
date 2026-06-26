CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"tags" text[],
	"link" text,
	"created_at" timestamp DEFAULT now()
);
