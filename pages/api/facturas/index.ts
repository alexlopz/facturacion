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
        numero: 13565,
        fecha: "sms",
        monto: 500.001,
        fecha_creacion: "10/09/2023",
      },
      {
        id: 2,
        cliente: "Tienda de comestibles",
        factura: 24680,
        metodo: "correo electrónico",
        frecuencia: "mensual",
        status: "inactivo",
        fecha_creacion: "12/09/2023",
      },
      {
        id: 3,
        cliente: "Restaurante La Piazza",
        factura: 98765,
        metodo: "teléfono",
        frecuencia: "diaria",
        status: "activo",
        fecha_creacion: "11/09/2023",
      },
      {
        id: 4,
        cliente: "Taller mecánico AutoFix",
        factura: 54321,
        metodo: "correo electrónico",
        frecuencia: "mensual",
        status: "inactivo",
        fecha_creacion: "15/09/2023",
      },
      {
        id: 5,
        cliente: "Farmacia Saludable",
        factura: 77777,
        metodo: "sms",
        frecuencia: "semanal",
        status: "activo",
        fecha_creacion: "13/09/2023",
      },
      {
        id: 6,
        cliente: "Supermercado MegaMart",
        factura: 99999,
        metodo: "teléfono",
        frecuencia: "diaria",
        status: "inactivo",
        fecha_creacion: "14/09/2023",
      },
      {
        id: 7,
        cliente: "Hotel Paradise",
        factura: 55555,
        metodo: "correo electrónico",
        frecuencia: "mensual",
        status: "activo",
        fecha_creacion: "16/09/2023",
      },
      {
        id: 8,
        cliente: "Librería BookWorld",
        factura: 44444,
        metodo: "sms",
        frecuencia: "semanal",
        status: "inactivo",
        fecha_creacion: "17/09/2023",
      },
      {
        id: 9,
        cliente: "Cafetería Espresso",
        factura: 88888,
        metodo: "teléfono",
        frecuencia: "diaria",
        status: "activo",
        fecha_creacion: "18/09/2023",
      },
      {
        id: 10,
        cliente: "Gimnasio FitLife",
        factura: 66666,
        metodo: "correo electrónico",
        frecuencia: "mensual",
        status: "inactivo",
        fecha_creacion: "19/09/2023",
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}
