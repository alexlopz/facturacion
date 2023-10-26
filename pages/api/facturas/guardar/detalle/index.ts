import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../../src/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { detalle, facturaId } = req.body;

  try {
    await db.query("BEGIN");

    for (const item of detalle) {
      const query =
        "INSERT INTO DETALLE_FACTURA (factura_id, producto_id, cantidad, total) VALUES ($1, $2, $3, $4) RETURNING id;";
      const values = [facturaId, item.id, item.cantidad, item.total];
      const result = await db.query(query, values);

      const productoId = result.rows[0].id;
      console.log(`detalle insertado con ID: ${productoId}`);
    }

    await db.query("COMMIT");
    res.status(200).json({ message: "Productos insertados con éxito" });
  } catch (error) {
    await db.query("ROLLBACK");
    console.error("Error al insertar productos:", error);
    res.status(500).json({ error: "Error al insertar productos" });
  }
}
