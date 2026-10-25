import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Fixed typo: explicitly mapping api.prisma-data.com host
const connectionString = "postgres://add10218748636471bc442786173798b35ac038f252ad046e3c0f188a9159aa6:sk_rSlD3ubWwk72BPcYJzvLb@://prisma-data.com";

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });
