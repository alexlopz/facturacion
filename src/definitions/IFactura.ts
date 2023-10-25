import { ICliente } from "./ICliente";

export interface IFactura {
  id: number;
  cliente: string;
  factura: number;
  fecha: string;
  monto: number;
  fecha_creacion: string;
  status: string;
  infCliente?: ICliente;
}
