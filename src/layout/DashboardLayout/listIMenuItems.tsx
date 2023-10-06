import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LayersIcon from "@mui/icons-material/Layers";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaidIcon from '@mui/icons-material/Paid';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "@mui/material";
import { Home } from "@mui/icons-material";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CheckIcon from '@mui/icons-material/Check';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const mainListItems = (
  <React.Fragment>
    <Link underline="none" color="inherit" href={`/`}>
      <ListItemButton>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>

    <Link underline="none" color="inherit" href={`/solicitud`}>
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
          <PaidIcon/>
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
