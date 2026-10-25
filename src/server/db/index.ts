import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Direct Prisma Postgres connection string with required secure SSL formatting
const connectionString = "postgres://add10218748636471bc442786173798b35ac038f252ad046e3c0f188a9159aa6:sk_rSlD3ubWwk72BPcYJzvLb@db.prisma.io:5432/postgres?sslmode=require";

const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build";

const sql = neon(isBuildPhase ? "postgres://mock:mock@localhost:5432/mock" : connectionString);
export const db = drizzle(sql, { schema });
