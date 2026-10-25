import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://add10218748636471bc442786173798b35ac038f252ad046e3c0f188a9159aa6:sk_rSlD3ubWwk72BPcYJzvLb@db.prisma.io:5432/postgres?sslmode=require",
  },
});
