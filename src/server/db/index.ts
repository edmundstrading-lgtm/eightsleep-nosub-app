import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const connectionString = process.env.DRIZZLE_DATABASE_URL;

if (!connectionString) {
  throw new Error("DRIZZLE_DATABASE_URL is missing from your environment variables!");
}

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });
