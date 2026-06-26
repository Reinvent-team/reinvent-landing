import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString =
	"postgres://reinvent:reinvent_password@localhost:5432/reinvent_db";
const client = postgres(connectionString);
export const db = drizzle(client, { schema });
