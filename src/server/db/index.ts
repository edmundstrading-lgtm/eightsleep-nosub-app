import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Hardcoded string to bypass Vercel environment mapping bugs entirely
const connectionString = "postgres://add10218748636471bc442786173798b35ac038f252ad046e3c0f188a9159aa6:sk_rSlD3ubWwk72BPcYJzvLb@pooled.db.prisma.io:5432/postgres?sslmode=require";

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });

