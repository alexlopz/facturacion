import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = [
      {
        id: 1,
        factura: 329586,
        articulo: "Martillo",
        cantidad: 5,
        descripcion: "mango de madera",
        precio_unidad: 40.00,
        subtotal: 200.00,
      },
      {
        id: 2,
        factura: 458792,
        articulo: "Tornillo",
        cantidad: 2,
        descripcion: "medida 3/8",
        precio_unidad: 5.00,
        subtotal: 10.00,
      },
      {
        id: 3,
        factura: 878956,
        articulo: "arandela",
        cantidad: 7,
        descripcion: "arandela de presión",
        precio_unidad: 3.00,
        subtotal: 21.00,
      },
      {
        id: 4,
        factura: 142536,
        articulo: "tuerca",
        cantidad: 10,
        descripcion: "milimétrica",
        precio_unidad: 1.00,
        subtotal: 10.00,
      },
      {
        id: 5,
        factura: 976431,
        articulo: "Poxipol",
        cantidad: 1,
        descripcion: "cemento de contacto",
        precio_unidad: 65.00,
        subtotal: 65.00,
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}
