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
        factura: 2132132465,
        concepto: "Servicios adicionales",
        monto: 500,
        fecha_creacion: "15/04/2023",
      },
      {
        id: 2,
        cliente: "Tienda de comestibles",
        factura: 9876543210,
        concepto: "Servicios legales",
        monto: 750,
        fecha_creacion: "22/08/2023",
      },
      {
        id: 3,
        cliente: "Restaurante La Piazza",
        factura: 4567890123,
        concepto: "Cheque rechazado",
        monto: 1200,
        fecha_creacion: "10/05/2023",
      },
      {
        id: 4,
        cliente: "Taller mecánico AutoFix",
        factura: 5555555555,
        concepto: "Servicios legales",
        monto: 2000,
        fecha_creacion: "28/06/2023",
      },
      {
        id: 5,
        cliente: "Farmacia Saludable",
        factura: 1234567890,
        concepto: "Cheque rechazado",
        monto: 350,
        fecha_creacion: "05/03/2023",
      },
      {
        id: 6,
        cliente: "Supermercado MegaMart",
        factura: 9999999999,
        concepto: "Servicios adicionales",
        monto: 800,
        fecha_creacion: "17/07/2023",
      },
      {
        id: 7,
        cliente: "Hotel Paradise",
        factura: 7777777777,
        concepto: "Servicios legales",
        monto: 1500,
        fecha_creacion: "12/09/2023",
      },
      {
        id: 8,
        cliente: "Librería BookWorld",
        factura: 4444444444,
        concepto: "Servicios adicionales",
        monto: 200,
        fecha_creacion: "20/02/2023",
      },
      {
        id: 9,
        cliente: "Cafetería Espresso",
        factura: 8888888888,
        concepto: "Cheque rechazado",
        monto: 50,
        fecha_creacion: "08/01/2023",
      },
      {
        id: 10,
        cliente: "Gimnasio FitLife",
        factura: 6666666666,
        concepto: "Servicios adicionales",
        monto: 120,
        fecha_creacion: "02/10/2023",
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}
