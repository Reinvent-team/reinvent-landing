import { Hono } from "hono";
import { db } from "./db";
import { projects } from "./db/schema";

const app = new Hono();

// Projects API
app.get("/api/projects", async (c) => {
	try {
		const allProjects = await db.select().from(projects);
		return c.json({ success: true, data: allProjects });
	} catch (_error) {
		return c.json(
			{ success: false, message: "Database connection failed", data: [] },
			500,
		);
	}
});

app.get("/api/health", (c) => {
	return c.json({ status: "ok", message: "Backend is running" });
});

export default {
	port: 3000,
	fetch: app.fetch,
};
