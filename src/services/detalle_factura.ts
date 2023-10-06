import { IPlainObject } from "../definitions/IPlainObject";

export const getDetalle_facturas = async (): Promise<IPlainObject> => {
  const url = "http://localhost:3000/api/detalle_facturas";

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