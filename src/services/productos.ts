import { IPlainObject } from "../definitions/IPlainObject";

export const getProductos = async (): Promise<IPlainObject> => {
  const url = "http://localhost:3000/api/productos";

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
