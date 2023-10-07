import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = [
        {
          codigo: "1",
          nombre: "Juan Pérez",
          telefono: "1234-5678"
        },
        {
          codigo: "2",
          nombre: "María García",
          telefono: "9876-5432"
        },
        {
          codigo: "3",
          nombre: "Carlos López",
          telefono: "5062-8193"
        },
        {
          codigo: "4",
          nombre: "Laura Martínez",
          telefono: "9147-6238"
        },
        {
          codigo: "5",
          nombre: "Pedro Rodríguez",
          telefono: "5896-3417"
        },
        {
          codigo: "6",
          nombre: "Ana Sánchez",
          telefono: "2468-1357"
        },
        {
          codigo: "7",
          nombre: "Miguel Gómez",
          telefono: "3698-5142"
        },
        {
          codigo: "8",
          nombre: "Luisa Fernández",
          telefono: "7253-8149"
        },
        {
          codigo: "9",
          nombre: "David Ruiz",
          telefono: "6802-4193"
        },
        {
          codigo: "10",
          nombre: "Elena Torres",
          telefono: "1423-6795"
        }
      ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}