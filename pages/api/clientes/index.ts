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
        apellido: "",
        telefono: 78566754,
        direccion: "12 av 30-3 zona 3",
        email: "dfd@gmail.com",
        nit: "7317315-0",
      },
      {
        id: 2,
        nombre: "Restaurante El Sabor",
        apellido: "González",
        telefono: 65432198,
        direccion: "8 calle 15-2 zona 1",
        email: "elsabor@example.com",
        nit: "9856213-5",
      },
      {
        id: 3,
        nombre: "Tienda de Ropa Fashion",
        apellido: "Pérez",
        telefono: 55877445,
        direccion: "5a avenida 7-6 zona 4",
        email: "fashionstore@gmail.com",
        nit: "1234567-8",
      },
      {
        id: 4,
        nombre: "Cafetería Aromas",
        apellido: "",
        telefono: 70123456,
        direccion: "10 calle 25-1 zona 2",
        email: "aromascafe@example.com",
        nit: "8899331-2",
      },
      {
        id: 5,
        nombre: "Librería La Lectura",
        apellido: "López",
        telefono: 60011223,
        direccion: "15 avenida 12-5 zona 5",
        email: "lalibro@example.com",
        nit: "5432109-4",
      },
      {
        id: 6,
        nombre: "Farmacia Saludable",
        apellido: "",
        telefono: 78787878,
        direccion: "3a avenida 18-7 zona 6",
        email: "farmasalud@example.com",
        nit: "6543210-9",
      },
      {
        id: 7,
        nombre: "Taller Mecánico Veloz",
        apellido: "Gómez",
        telefono: 55555555,
        direccion: "20 calle 4-3 zona 1",
        email: "tallerveloz@example.com",
        nit: "1122334-5",
      },
      {
        id: 8,
        nombre: "Pizzería Italia",
        apellido: "",
        telefono: 78901234,
        direccion: "7 avenida 9-2 zona 4",
        email: "pizzaitalia@example.com",
        nit: "9988776-1",
      },
      {
        id: 9,
        nombre: "Droguería FarmaLife",
        apellido: "Martínez",
        telefono: 63332211,
        direccion: "25 calle 10-1 zona 3",
        email: "farmalife@example.com",
        nit: "7778888-7",
      },
      {
        id: 10,
        nombre: "Panadería Delicias",
        apellido: "",
        telefono: 88888888,
        direccion: "14 avenida 6-4 zona 2",
        email: "delipan@example.com",
        nit: "3210987-6",
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}
