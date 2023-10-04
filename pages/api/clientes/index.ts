import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = [
      {
        id: 1,
        nombre: "Gasolinera Shell",
        nit: "000000-0",
      },
      {
        id: 2,
        nombre: "Supermercado Mega",
        nit: "111111-1",
      },
      {
        id: 3,
        nombre: "Restaurante La Piazza",
        nit: "222222-2",
      },
      {
        id: 4,
        nombre: "Tienda de electrónicos TecnoWorld",
        nit: "333333-3",
      },
      {
        id: 5,
        nombre: "Farmacia SaludPlus",
        nit: "444444-4",
      },
      {
        id: 6,
        nombre: "Hotel Paradise",
        nit: "555555-5",
      },
      {
        id: 7,
        nombre: "Taller Mecánico AutoFix",
        nit: "666666-6",
      },
      {
        id: 8,
        nombre: "Librería Book Haven",
        nit: "777777-7",
      },
      {
        id: 9,
        nombre: "Panadería El Horno",
        nit: "888888-8",
      },
      {
        id: 10,
        nombre: "Gimnasio FitLife",
        nit: "999999-9",
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}
