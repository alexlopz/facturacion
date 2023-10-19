import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = [
      {
        id: 1,
        clientes: "Gasolinera Shell",
        "factura": 2132132465,
        "concepto": "Servicios adicionales",
        "monto": 500,
        "num_fecha": "1-1-2002",
        "Vencidas_fechas": "1-1-2002",
        "plazos": "30",
        "meses": "2"
      },
      {
        "id": 2,
        clientes: "Tienda de comestibles",
        "factura": 9876543210,
        "concepto": "Servicios legales",
        "monto": 750,
        "num_fecha": "1-1-2003",
        "Vencidas_fechas": "1-1-2003",
        "plazos": "30",
        "meses": "4"
      },
      {
        id: 3,
        clientes: "Restaurante La Piazza",
        "factura": 4567890123,
        "concepto": "Cheque rechazado",
        "monto": 1200,
        "num_fecha": "1-1-2004",
        "plazos": "60",
        "meses": "2",
        "Vencidas_fechas": "1-1-2002"
      },
      {
        "id": 4,
        "clientes": "Taller mecánico AutoFix",
        "factura": 5555555555,
        "concepto": "Servicios legales",
        "monto": 2000,
        "num_fecha": "1-1-2005",
        "plazos": "90",
        "meses": "5",
        "Vencidas_fechas": "1-1-2002"
      },
      {
        "id": 5,
        "clientes": "Farmacia Saludable",
        "factura": 1234567890,
        "concepto": "Cheque rechazado",
        "monto": 350,
        "num_fecha": "1-1-2006",
        "plazos": "30",
        "meses": "1",
        "Vencidas_fechas": "1-1-2002"
      },
      {
        "id": 6,
        "clientes": "Supermercado MegaMart",
        "factura": 9999999999,
        "concepto": "Servicios adicionales",
        "monto": 800,
        "num_fecha": "1-1-2007",
        "plazos": "30",
        "meses": "7",
        "Vencidas_fechas": "1-1-2002"
      },
      {
        "id": 7,
        "clientes": "Hotel Paradise",
        "factura": 7777777777,
        "concepto": "Servicios legales",
        "monto": 1500,
        "num_fecha": "1-1-2008",
        "plazos": "90",
        "meses": "3",
        "Vencidas_fechas": "1-1-2002"
      },
      {
        "id": 8,
        "clientes": "Librería BookWorld",
        "factura": 4444444444,
        "concepto": "Servicios adicionales",
        "monto": 200,
        "num_fecha": "1-1-2009",
        "plazos": "60",
        "meses": "3",
        "Vencidas_fechas": "1-1-2002"
      },
      {
        "id": 9,
        "clientes": "Cafetería Espresso",
        "factura": 8888888888,
        "concepto": "Cheque rechazado",
        "monto": 50,
        "num_fecha": "1-1-2010",
        "plazos": "30",
        "meses": "2",
        "Vencidas_fechas": "1-1-2002"
      },
      {
        "id": 10,
        "clientes": "Gimnasio FitLife",
        "factura": 6666666666,
        "concepto": "Servicios adicionales",
        "monto": 120,
        "num_fecha": "1-1-2011",
        "plazos": "30",
        "meses": "2",
        "Vencidas_fechas": "1-1-2002"
      }
    ]
    
    
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}
