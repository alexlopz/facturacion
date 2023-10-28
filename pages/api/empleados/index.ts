import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await db.query('SELECT * FROM EMPLEADOS');
    res.status(200).json(response.rows);
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ error: 'Hubo un error en la consulta a la base de datos.' });
  }
}
