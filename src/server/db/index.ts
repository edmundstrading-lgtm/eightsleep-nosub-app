import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = "postgres://add10218748636471bc442786173798b35ac038f252ad046e3c0f188a9159aa6:sk_rSlD3ubWwk72BPcYJzvLb@db.prisma.io:5432/postgres?sslmode=require";
const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build";

const client = postgres(isBuildPhase ? "postgres://mock:mock@localhost:5432/mock" : connectionString, {
  max: isBuildPhase ? 1 : 10 
});

export const db = drizzle(client, { schema });
