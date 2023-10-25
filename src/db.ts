import { Pool } from "pg";
import { config } from "./utilities/config";

const pool = new Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
};
