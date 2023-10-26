import { SetStateAction } from "react";

export interface IDetalleFactura {
    facturaId: number;
    openModal: boolean;
    setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  }
  