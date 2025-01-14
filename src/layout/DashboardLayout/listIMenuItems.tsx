import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import BarChartIcon from "@mui/icons-material/BarChart";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaidIcon from "@mui/icons-material/Paid";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "@mui/material";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import NoteIcon from "@mui/icons-material/Note";
import BalanceIcon from "@mui/icons-material/Balance";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

import CheckIcon from "@mui/icons-material/Check";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DescriptionIcon from '@mui/icons-material/Description';

export const mainListItems = (
  <React.Fragment>
    <Link underline="none" color="inherit" href={`/factura`}>
      <ListItemButton>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Crear factura" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/Rutas`}>
      <ListItemButton>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText primary="Rutas de Cobro" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/convenios`}>
      <ListItemButton>
        <ListItemIcon>
          <HandshakeIcon />
        </ListItemIcon>
        <ListItemText primary="Convenios de Pago" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/solicitud`}>
      <ListItemButton>
        <ListItemIcon>
          <NoteAltIcon />
        </ListItemIcon>
        <ListItemText primary="Solicitud de Crédito" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/autorizacion`}>
      <ListItemButton>
        <ListItemIcon>
          <CheckIcon />
        </ListItemIcon>
        <ListItemText primary="Autorizaciones" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/reportes`}>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/visalink`}>
      <ListItemButton>
        <ListItemIcon>
          <PaymentOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Pagos Visalink" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/recordatorios`}>
      <ListItemButton>
        <ListItemIcon>
          <AccessAlarmOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Recordatorios" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/cargos`}>
      <ListItemButton>
        <ListItemIcon>
          <LayersOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Cargos" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/amortizaciones`}>
      <ListItemButton>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Amortizaciones" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/recibos`}>
      <ListItemButton>
        <ListItemIcon>
          <ReceiptLongIcon />
        </ListItemIcon>
        <ListItemText primary="Recibos" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/estadofacturas`}>
      <ListItemButton>
        <ListItemIcon>
          <HistoryEduIcon />
        </ListItemIcon>
        <ListItemText primary="Estado Facturas" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/estadorecibos`}>
      <ListItemButton>
        <ListItemIcon>
          <NewspaperIcon />
        </ListItemIcon>
        <ListItemText primary="Estado Recibos" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/deudores`}>
      <ListItemButton>
        <ListItemIcon>
          <MoneyOffIcon />
        </ListItemIcon>
        <ListItemText primary="Lista de Deudores" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/saldos`}>
      <ListItemButton>
        <ListItemIcon>
          <BalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Antiguedad de Saldos" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/notaCredito`}>
      <ListItemButton>
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText primary="Nota Credito" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/notaDebito`}>
      <ListItemButton>
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText primary="Nota Debito" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
