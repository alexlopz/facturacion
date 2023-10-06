import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = [
      {
        id: 1,
        plazo: "30 dias",
        fecha_creacion: "10/09/2023",
      },
      {
        id: 2,
        plazo: "30 dias",
        fecha_creacion: "8/04/2023",
      },
      {
        id: 3,
        plazo: "60 dias",
        fecha_creacion: "10/07/2023",
      },
      {
        id: 4,
        plazo: "90 dias",
        fecha_creacion: "12/08/2023",
      },
      {
        id: 5,
        plazo: "30 dias",
        fecha_creacion: "14/05/2022",
      },
      {
        id: 6,
        plazo: "30 dias",
        fecha_creacion: "25/09/2023",
      },
      {
        id: 7,
        plazo: "60 dias",
        fecha_creacion: "22/09/2023",
      },
      {
        id: 8,
        plazo: "30 dias",
        fecha_creacion: "5/10/2021",
      },
      {
        id: 9,
        plazo: "45 dias",
        fecha_creacion: "09/05/2023",
      },
      {
        id: 10,
        plazo: "60 dias",
        fecha_creacion: "11/07/2023",
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}