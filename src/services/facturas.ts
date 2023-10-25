import { IPlainObject } from "../definitions/IPlainObject";

export const getFacturas = async (): Promise<IPlainObject> => {
  const url = "http://localhost:3000/api/facturas";

  try {
    const response = await fetch(url);

    if (response.ok && response.status === 200) {
      return response.json();
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const crearFactura = async (body: any): Promise<IPlainObject> => {
  const url = "http://localhost:3000/api/facturas/guardar";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (response.ok && response.status === 200) {
      return response.json();
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
