import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../src/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { cliente, monto } = req.body;
    const query = `
      INSERT INTO FACTURA (cliente, correlativo, fecha_vencimiento, monto, fecha_creacion, status)
      SELECT 
        $1, 
        $2, 
        CURRENT_TIMESTAMP AT TIME ZONE 'America/Guatemala' + (SELECT dias_credito FROM CLIENTE WHERE id = $1) * INTERVAL '1 day', 
        $3, 
        CURRENT_TIMESTAMP AT TIME ZONE 'America/Guatemala', 
        'ACTIVA'
        RETURNING id;`;

    const response = await db.query(query, [cliente, null, monto]);
    res.status(200).json({ id: response.rows[0].id });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({
      error: "Hubo un error en la consulta a la base de datos.",
      body: error,
      message: error?.detail,
    });
  }
}
