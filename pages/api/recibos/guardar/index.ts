import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../src/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id_factura, monto, descripcion, metodo_pago, num_documento } = req.body;
    const query = `
      INSERT INTO RECIBO (id_factura, fecha, monto, descripcion, metodo_pago, estado, num_documento)
      SELECT 
        $1,
        CURRENT_TIMESTAMP AT TIME ZONE 'America/Guatemala',
        $2,  
        $3, 
        $4, 
        'ACTIVA',
        $5;`;

    const response = await db.query(query, [id_factura, monto, descripcion, metodo_pago, num_documento]);
    res.status(200).json(response.rows);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({
      error: "Hubo un error en la consulta a la base de datos.",
      body: error,
      message: error?.detail,
    });
  }
}