import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await db.query("SELECT * FROM PRODUCTO");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(200).json({});
  }
}
