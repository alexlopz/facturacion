import { IConfig } from "../definitions/IConfig";

export const config: IConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  dbHost: process.env.NEXT_PUBLIC_DB_HOST || "",
  dbName: process.env.NEXT_PUBLIC_DB_NAME || "",
  dbUser: process.env.NEXT_PUBLIC_DB_USER || "",
  dbPassword: process.env.NEXT_PUBLIC_DB_PASSWORD || "",
};
