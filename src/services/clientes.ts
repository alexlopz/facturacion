import { IPlainObject } from "../definitions/IPlainObject";

export const getClientes = async (): Promise<IPlainObject> => {
  const url = "http://localhost:3000/api/clientes";

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
