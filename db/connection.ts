import { SQL } from "bun";

export const sql = new SQL({
  url: process.env.DATABASE_URL!,
  tls: true,
  onconnect: () => {
    console.log("✅ Connected to Postgres DB");
  },
  onclose: () => {
    console.log("❌ Disconnected from DB");
  },
});
