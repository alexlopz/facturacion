import { IPlainObject } from "../definitions/IPlainObject";

export const getFacturas = async (): Promise<IPlainObject[]> => {
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

export const getFacturaPorId = async (facturaId: number): Promise<IPlainObject> => {
  const url = `http://localhost:3000/api/facturas?id=${facturaId}`;

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

export const getFacturasCliente = async (clienteId: number): Promise<IPlainObject> => {
  const url = `http://localhost:3000/api/facturas/cliente?id=${clienteId}`;

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
      headers: {
        "Content-Type": "application/json",
      },
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

export const crearDetalleFactura = async (body: any): Promise<IPlainObject> => {
  const url = "http://localhost:3000/api/facturas/guardar/detalle";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
