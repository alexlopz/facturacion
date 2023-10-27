import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../src/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const idCliente = req.query.id;

    const query = `SELECT
    F.*,
    to_jsonb(C.*) AS "infoCliente",
    (
        SELECT jsonb_agg(
            jsonb_set(
                to_jsonb(DF2.*),
                '{producto}',
                to_jsonb(P.*)
            )
        )
        FROM DETALLE_FACTURA AS DF2
        JOIN PRODUCTO AS P ON DF2.producto_id = P.id
        WHERE DF2.factura_id = F.id
    ) AS "detalle"
FROM FACTURA AS F
JOIN CLIENTE AS C ON F.cliente = C.id
WHERE F.cliente = $1;`;

    const response = await db.query(query, [idCliente]);
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
