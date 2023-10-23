import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = [
      {
        id: 1,
        sku: "TSH-FFF-M",
        nombre: "Lámina Policarbonato Celula",
        descripcion: "Lámina de policarbonato celular transparente",
        precio: 20.0,
      },
      {
        id: 2,
        sku: "ABR-123-X",
        nombre: "Lija de Grano 80",
        descripcion: "Lija abrasiva de grano 80 para superficies ásperas",
        precio: 1.5,
      },
      {
        id: 3,
        sku: "CEM-789-A",
        nombre: "Bolsa de Cemento Portland",
        descripcion: "Bolsa de cemento Portland de alta resistencia",
        precio: 8.99,
      },
      {
        id: 4,
        sku: "TUB-456-Y",
        nombre: "Tubo PVC de 3 pulgadas",
        descripcion: "Tubo de PVC para sistemas de drenaje",
        precio: 4.25,
      },
      {
        id: 5,
        sku: "ESP-222-Z",
        nombre: "Esquinero Metálico",
        descripcion: "Esquinero de metal para refuerzo de esquinas",
        precio: 2.75,
      },
      {
        id: 6,
        sku: "PNT-777-P",
        nombre: "Pintura Látex Blanco",
        descripcion: "Pintura látex de alta calidad en color blanco",
        precio: 15.99,
      },
      {
        id: 7,
        sku: "CLA-654-Q",
        nombre: "Cerradura de Puerta",
        descripcion: "Cerradura para puertas de seguridad",
        precio: 12.5,
      },
      {
        id: 8,
        sku: "ALM-111-R",
        nombre: "Alambre Galvanizado",
        descripcion: "Alambre galvanizado para cercas y estructuras",
        precio: 3.99,
      },
      {
        id: 9,
        sku: "TAP-333-S",
        nombre: "Tapa de Registro de Alcantarillado",
        descripcion: "Tapa de registro para sistemas de alcantarillado",
        precio: 7.75,
      },
      {
        id: 10,
        sku: "PIE-888-T",
        nombre: "Pieza de Conexión de PVC",
        descripcion: "Pieza de conexión de PVC para tuberías de agua",
        precio: 1.2,
      },
    ];

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({});
  }
}
