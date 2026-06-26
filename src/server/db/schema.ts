import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	imageUrl: text("image_url").notNull(),
	tags: text("tags").array(), // Arrays are supported in postgres
	link: text("link"),
	createdAt: timestamp("created_at").defaultNow(),
});
