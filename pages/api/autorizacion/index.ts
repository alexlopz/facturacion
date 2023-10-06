import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = [
      {
        id: 1,
        cliente: "Gasolinera Shell",
        factura: 13565,
        monto: 500.01,
        fecha_creacion: "10/09/2023",
      },
      {
        id: 2,
        cliente: "Tienda de comestibles",
        factura: 24680,
        monto: 700.00,
        fecha_creacion: "11/09/2023",
      },
      {
        id: 3,
        cliente: "Restaurante La Piazza",
        factura: 98765,
        monto: 400.25,
        fecha_creacion: "12/09/2023",
      },
      {
        id: 4,
        cliente: "Taller mecánico AutoFix",
        factura: 54321,
        monto: 800.00,
        fecha_creacion: "11/09/2023",
      },
      {
        id: 5,
        cliente: "Farmacia Saludable",
        factura: 76777,
        monto: 400.25,
        fecha_creacion: "12/09/2023",
      },
      {
        id: 6,
        cliente: "Supermercado MegaMart",
        factura: 99999,
        monto: 40.25,
        fecha_creacion: "15/09/2023",
      },
      {
        id: 7,
        cliente: "Hotel Paradise",
        factura: 55555,
        monto: 7882.25,
        fecha_creacion: "14/09/2023",
      },
      {
        id: 8,
        cliente: "Librería BookWorld",
        factura: 44444,
        monto: 640.30,
        fecha_creacion: "19/09/2023",
      },
      {
        id: 9,
        cliente: "Cafetería Espresso",
        factura: 88888,
        monto: 785.00,
        fecha_creacion: "13/08/2023",
      },
      {
        id: 10,
        cliente: "Gimnasio FitLife",
        factura: 623628,
        monto: 305.20,
        fecha_creacion: "18/09/2023",
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}

